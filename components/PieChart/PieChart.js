import React, { useEffect } from "react";
import * as d3 from "d3";

export default function PieChart(props) {
  let margin = { top: 15, right: 30, bottom: 30, left: 30 };
  let width = 460 - margin.left - margin.right;
  let height = 400 - margin.top - margin.bottom;
  let radius = Math.min(width, height) / 2;
  let keys = Object.keys(props.data);
  let values = Object.values(props.data);

  useEffect(() => {
    // set the color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // append the svg object to the body of the page
    let svg = d3
      .select(`#${props.id}`)
      .append("svg")
      .attr("viewBox", [
        0,
        0,
        width + margin.left + margin.right,
        height + margin.top + margin.bottom,
      ])
      .append("g")
      .attr(
        "transform",
        `translate(${width / 2 + margin.left}, ${height / 2 + margin.top})`
      );

    let arcs = d3.pie().value(function (d) {
      return d.value;
    })(props.data);
    var arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

    // Build the pie chart
    svg
      .selectAll("slices")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", function (d, i) {
        return color(i);
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Add annotation
    svg
      .selectAll("slices")
      .data(arcs)
      .enter()
      .append("text")
      .text(function (d) {
        return d.data.name;
      })
      .attr("transform", function (d) {
        return "translate(" + arcGenerator.centroid(d) + ")";
      })
      .style("text-anchor", "middle")
      .style("font-size", 14);
  });
  return <div id={props.id}></div>;
}
