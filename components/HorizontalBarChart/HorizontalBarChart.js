import React,  { useEffect } from "react";
import ReactDOM from 'react-dom';

import * as d3 from "d3";
import { keys } from 'd3-collection';

const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en");
const formatPercent = d3.format(".1%");

let slices = ['- >30%', '- 10-30%', '- <10%',
'Neutral', '+ <10%', '+ 10-30%', '+ >30%'];

// Legend formatting.
const tickSize = 0;
const legendWidth = 350;
const legendHeight = 44 + tickSize;
const marginTop = 18;
const marginRight = 0;
const marginBottom = 16 + tickSize;
const marginLeft = 0;
const ticks = legendWidth / 64;
const title = "Expected Revenue Change";

// For wrapping text on the y-axis.
function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                d3.select(this).attr("y", y-2)
                tspan = text.append("tspan")
                  .attr("x", x)
                  .attr("y", y)
                  .attr("dy", ++lineNumber * lineHeight + dy + "em")
                  .text(word);
            }
        }
    });
};

export default function HorizontalBarChart(props) {
  const width = 550;
  const margin = ({top: 30, right: 10, bottom: 0, left: 100});
  const height = props.data.length * 25 + margin.top + margin.bottom;

	useEffect(() => {
		let y = d3.scaleBand()
	    .domain(props.data.map(d => d.name))
	    .range([margin.top, height - margin.bottom])
	    .padding(0.08);

		let	x = d3.scaleLinear()
		    .range([margin.left, width - margin.right]);

		let yAxis = g => g
	    .attr("transform", `translate(${margin.left},0)`)
	    .call(d3.axisLeft(y).tickSizeOuter(0))
	    .call(g => g.selectAll(".domain").remove());

		let xAxis = g => g
			 .attr("transform", `translate(0,${margin.top})`)
			 .call(d3.axisTop(x).ticks(width / 100, "%"))
			 .call(g => g.selectAll(".domain").remove());

		let series = d3.stack()
	    .keys(slices)
	    .offset(d3.stackOffsetExpand)(props.data)
	    .map(d => (d.forEach(v => v.key = d.key), d));

		const color = d3.scaleOrdinal()
			.domain(slices)
			.range(d3.schemeSpectral[slices.length])
			.unknown("#ccc");

    const chart = d3.select("#svg")
			.attr("width", width)
      .attr("height", height)
      .style("display", "auto");
		chart.attr("viewBox", [0, 0, width, height])
			 .style("overflow", "visible");
		chart.append("g")
			 .selectAll("g")
			 .data(series)
			 .enter().append("g")
			   .attr("fill", d => color(d.key))
			 .selectAll("rect")
			 .data(d => d)
			 .join("rect")
			   .attr("x", d => x(d[0]))
			   .attr("y", d => y(d.data.name))
			   .attr("width", d => x(d[1]) - x(d[0]))
			   .attr("height", y.bandwidth())
			 .append("title")
			    .text(d => `${d.data.name} ${d.key}
            ${formatPercent(d[1] - d[0])} (${formatValue(d.data[d.key])})`);

	  chart.append("g")
	     .call(xAxis);
	  chart.append("g")
	     .call(yAxis)
       .selectAll(".tick text")
       .call(wrap, 200);

   // Add legend
	 let x1 = d3.scaleLinear()
	     .domain([-1, color.range().length - 1])
	     .rangeRound([marginLeft, legendWidth - marginRight]);

	 const thresholds = color.domain();
	 const legend = d3.select("#legend")
	     .attr("width", legendWidth)
       .attr("height", legendHeight)
       .attr("viewBox", [0, 0, legendWidth, legendHeight])
       .style("overflow", "visible")
       .style("display", "auto");
	 let tickFormat;
	 const thresholdFormat = tickFormat === undefined ? d => d :
      typeof tickFormat === "string" ? d3.format(tickFormat) :
      tickFormat;

	 legend.append("g")
		 .selectAll("rect")
		 .data(color.range())
		 .join("rect")
		 .attr("x", (d, i) => x1(i - 1))
		 .attr("y", marginTop)
		 .attr("width", (d, i) => x1(i) - x1(i - 1))
		 .attr("height", legendHeight - marginTop - marginBottom)
		 .attr("fill", d => d);

	 let tickValues = d3.range(thresholds.length);
	 tickFormat = i => thresholdFormat(thresholds[i], i);

	 legend.append("g")
    .attr("transform", `translate(-27, ${legendHeight - marginBottom})`)
    .call(d3.axisBottom(x1)
      .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
      .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
      .tickSize(tickSize)
      .tickValues(tickValues))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
			.attr("x", marginLeft + 27)
      .attr("y", marginTop + marginBottom - legendHeight - 6)
      .attr("text-anchor", "start")
      .text(title));
  });

	return (
		      <div> <svg className={"f"} id="legend" width={legendWidth} height={legendHeight} /><br/>
	        <svg className={"horizontalBarChart"} id="svg" width={width} height={height} /> </div>
	    );

};
