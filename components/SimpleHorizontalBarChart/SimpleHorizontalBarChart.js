import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import * as d3 from "d3";
import { keys, entries } from "d3-collection";
import { CHALLENGES_CODES_SHORT } from "helpers/surveycodes.js";

const formatValue = (x) => (isNaN(x) ? "N/A" : x.toLocaleString("en"));
const formatPercent = d3.format(".1%");

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
      tspan = text
        .text(null)
        .append("tspan")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", dy + "em");
    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        d3.select(this).attr("y", y - 2);
        tspan = text
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
}

export default function SimpleHorizontalBarChart(props) {
  if (props.countrycode === "") {
    return <div></div>;
  }
  var data = [];
  var total = 0;
  for (const [key, value] of Object.entries(props.data[props.countrycode])) {
    if (key === "total") {
      total = value;
    } else {
      let obj = new Object();
      obj.key = key;
      obj.value = value;
      data.push(obj);
    }
  }
  if (total === 0) {
    return <div></div>;
  }

  data = data.sort(function (a, b) {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    return 0;
  });

  const width = 800;
  const margin = { top: 0, right: 50, bottom: 0, left: 150 };
  const height = data.length * 40 + margin.top + margin.bottom;

  for (let row of data) {
    row.value /= total;
  }

  useEffect(() => {
    d3.select(`#svg${props.id}`).selectAll("*").remove();

    const chart = d3
      .select(`#svg${props.id}`)
      .attr("viewBox", [0, 0, width, height])
      .style("display", "auto")
      .style("overflow", "visible");

    let tooltip = d3
      .select(`#body${props.id}`)
      .append("div")
      .style("position", "absolute")
      .style("text-align", "center")
      .style("z-index", "10")
      .style("padding", "2px")
      .style("font", "12px sans-serif")
      .style("background", "lightsteelblue")
      .style("border", "0px")
      .style("border-radius", "8px")
      .style("pointer-events", "none");

    // Three tooltip helper functions
    let mouseover = function (event, d) {
      tooltip.style("visibility", "visible");
    };
    let mousemove = function (event, d) {
      tooltip
        .text(d.key + ": " + d.value.toFixed(2))
        .style(
          "transform",
          `translate(${event.offsetX}px, ${
            event.offsetY - chart.node().getBoundingClientRect().height
          }px)`
        )
        .style("visibility", "visible");
    };
    let mouseleave = function (d) {
      tooltip.transition().duration(200).style("visibility", "hidden");
    };

    const color = d3
      .scaleOrdinal()
      .domain(
        data.map(function (d) {
          return d.key;
        })
      )
      .range(
        d3.quantize(
          d3.interpolateHcl("#60c96e", "#4d4193"),
          data.map(function (d) {
            return d.key;
          }).length
        )
      )
      .unknown("#ccc");

    let x = d3
      .scaleLinear()
      .domain([0, 1])
      .range([margin.left, width - margin.right]);

    chart
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(width / 100, "%"))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .attr("font-size", "1.5em");

    let y = d3
      .scaleBand()
      .domain(
        data.map(function (d) {
          return d.key;
        })
      )
      .range([margin.top, height - margin.bottom])
      .padding(0.08);

    chart
      .append("g")
      .call(d3.axisLeft(y))
      .attr("transform", `translate(${margin.left},0)`)
      .selectAll(".tick text")
      .attr("font-size", "1.5em")
      .call(wrap, 300);

    chart
      .selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("width", function (d) {
        return x(d.value) - x(0);
      })
      .attr("y", function (d) {
        return y(d.key);
      })
      .attr("height", y.bandwidth())
      //.attr("fill", "#69b3a2")
      .attr("fill", (d) => color(d.key))
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  });

  return (
    <div id={"body" + props.id}>
      <svg
        className={"horizontalBarChart"}
        id={"svg" + props.id}
        viewBox={[0, 0, width, height]}
      />
    </div>
  );
}
