import React, { useEffect } from "react";
import * as d3 from "d3";

export default function LollipopChart(props) {
  let margin = { top: 0, right: 30, bottom: 30, left: 150 };
  let width = 460 - margin.left - margin.right;
  let height = 400 - margin.top - margin.bottom;

  useEffect(() => {
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
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    let max = Math.max(
      ...props.data.map(function (d) {
        return d.value;
      })
    );
    let x = d3
      .scaleLinear()
      .domain([0, max + 200])
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    let y = d3
      .scaleBand()
      .range([0, height])
      .domain(
        props.data.map(function (d) {
          return d.name;
        })
      )
      .padding(1);
    svg.append("g").call(d3.axisLeft(y));

    // Lines
    svg
      .selectAll("myline")
      .data(props.data)
      .enter()
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y1", function (d) {
        return y(d.name);
      })
      .attr("y2", function (d) {
        return y(d.name);
      })
      .attr("stroke", "grey");

    // Circles
    svg
      .selectAll("mycircle")
      .data(props.data)
      .enter()
      .append("circle")
      .attr("cx", x(0))
      .attr("cy", function (d) {
        return y(d.name);
      })
      .attr("r", "4")
      .style("fill", "#69b3a2")
      .attr("stroke", "black");

    // Change the X coordinates of line and circle
    svg
      .selectAll("circle")
      .transition()
      .duration(1000)
      .attr("cx", function (d) {
        return x(d.value);
      });

    svg
      .selectAll("line")
      .transition()
      .duration(1000)
      .attr("x1", function (d) {
        return x(d.value);
      });
  });
  return <div id={props.id}></div>;
}
