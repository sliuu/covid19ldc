import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import * as d3 from "d3";
import { keys } from "d3-collection";

const formatValue = (x) => (isNaN(x) ? "N/A" : x.toLocaleString("en"));
const formatPercent = d3.format(".1%");

let slices = [
  "- >30%",
  "- 10-30%",
  "- <10%",
  "Neutral",
  "+ <10%",
  "+ 10-30%",
  "+ >30%",
];

// Legend formatting.
const tickSize = 0;
const legendWidth = 350;
const legendHeight = 44 + tickSize;
const marginTop = 18;
const marginRight = 30;
const marginBottom = 16 + tickSize;
const marginLeft = 72;
const ticks = legendWidth / 64;
const title = "Expected Revenue Change";

export default function HorizontalBarChart(props) {
  const width = 500;
  const margin = { top: 30, right: 40, bottom: 0, left: 50 };
  const height = props.data.length * 25 + margin.top + margin.bottom;

  useEffect(() => {
    let y = d3
      .scaleBand()
      .domain(props.data.map((d) => d.name))
      .range([margin.top, height - margin.bottom])
      .padding(0.08);

    let x = d3.scaleLinear().range([margin.left, width - margin.right]);

    let yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickSizeOuter(0))
        .call((g) => g.selectAll(".domain").remove());

    let xAxis = (g) =>
      g
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(x).ticks(width / 100, "%"))
        .call((g) => g.selectAll(".domain").remove());

    let series = d3
      .stack()
      .keys(slices)
      .offset(d3.stackOffsetExpand)(props.data)
      .map((d) => (d.forEach((v) => (v.key = d.key)), d));

    const color = d3
      .scaleOrdinal()
      .domain(slices)
      .range(d3.schemeSpectral[slices.length])
      .unknown("#ccc");
    const chart = d3
      .select("#svg")
      .attr("viewBox", [-60, 0, width + margin.right, height])
      .style("display", "auto")
      .style("overflow", "visible");
    chart
      .append("g")
      .selectAll("g")
      .data(series)
      .enter()
      .append("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => x(d[0]))
      .attr("y", (d) => y(d.data.name))
      .attr("width", (d) => x(d[1]) - x(d[0]))
      .attr("height", y.bandwidth())
      .append("title")
      .text(
        (d) => `${d.data.name} ${d.key}
            ${formatPercent(d[1] - d[0])} (${formatValue(d.data[d.key])})`
      );

    chart.append("g").call(xAxis);
    chart.append("g").call(yAxis);

    // Add legend
    let x1 = d3
      .scaleLinear()
      .domain([-1, color.range().length - 1])
      .rangeRound([marginLeft, legendWidth - marginRight]);

    const thresholds = color.domain();
    const legend = d3
      .select("#legend")
      .attr("viewBox", [0, 0, legendWidth, legendHeight])
      .style("display", "auto");
    let tickFormat;
    const thresholdFormat =
      tickFormat === undefined
        ? (d) => d
        : typeof tickFormat === "string"
        ? d3.format(tickFormat)
        : tickFormat;

    legend
      .append("g")
      .selectAll("rect")
      .data(color.range())
      .join("rect")
      .attr("x", (d, i) => x1(i - 1))
      .attr("y", marginTop)
      .attr("width", (d, i) => x1(i) - x1(i - 1))
      .attr("height", legendHeight - marginTop - marginBottom)
      .attr("fill", (d) => d);

    let tickValues = d3.range(thresholds.length);
    tickFormat = (i) => thresholdFormat(thresholds[i], i);

    legend
      .append("g")
      .attr("transform", `translate(-20, ${legendHeight - marginBottom})`)
      .call(
        d3
          .axisBottom(x1)
          .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
          .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
          .tickSize(tickSize)
          .tickValues(tickValues)
      )
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .append("text")
          .attr("x", marginLeft + 20)
          .attr("y", marginTop + marginBottom - legendHeight - 6)
          .attr("text-anchor", "start")
          .text(title)
      );
  });

  return (
    <div>
      <svg
        className={"f"}
        id="legend"
        viewBox={[0, 0, legendWidth, legendHeight]}
      />
      <br />
      <svg
        className={"horizontalBarChart"}
        id="svg"
        viewBox={[-60, 0, width, height]}
      />
    </div>
  );
}
