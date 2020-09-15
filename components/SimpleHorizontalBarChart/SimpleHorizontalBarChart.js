import React,  { useEffect } from "react";
import ReactDOM from 'react-dom';

import * as d3 from "d3";
import { keys, entries } from 'd3-collection';
import { CHALLENGES_CODES_SHORT } from 'helpers/surveycodes.js';

const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en");
const formatPercent = d3.format(".1%");

export default function HorizontalBarChart(props) {
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

  data = data.sort(function(a, b) {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    return 0;
  });

  const width = 800;
  const margin = ({top: 0, right: 50, bottom: 0, left: 100});
  const height = data.length * 30 + margin.top + margin.bottom;

  for (let row of data) {
    row.value /= total;
  }

	useEffect(() => {
		d3.select(`#svg${props.id}`)
			.selectAll("*").remove();

    const chart = d3.select(`#svg${props.id}`)
			.attr("viewBox", [0, 0, width, height])
      .style("display", "auto")
      .style("overflow", "visible");

    let tooltip = d3.select(`#body${props.id}`)
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
    let mouseover = function(event, d) {
      tooltip
        .style("visibility", "visible");
    }
    let mousemove = function(event, d) {
      tooltip
        .text(d.key + ": " + d.value.toFixed(2))
                .style("transform", `translate(${event.offsetX}px, ${event.offsetY - chart.node().getBoundingClientRect().height}px)`)
        .style("visibility", "visible");
    }
    let mouseleave = function(d) {
      tooltip
        .transition()
        .duration(200)
        .style("visibility", "hidden");
    }

    let x = d3.scaleLinear()
      .domain([0,1])
      .range([margin.left, width - margin.right]);

    chart.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(width / 100, "%"))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    let y = d3.scaleBand()
      .domain(data.map(function(d) { return d.key; }))
      .range([ margin.top, height - margin.bottom ])
      .padding(.08);

    chart.append("g")
      .call(d3.axisLeft(y))
      .attr("transform", `translate(${margin.left},0)`);

    chart.selectAll("myRect")
	    .data(data)
	    .enter()
	    .append("rect")
	    .attr("x", x(0) )
	    .attr("width", function(d) { return x(d.value) - x(0); })
      .attr("y", function(d) { return y(d.key); })
	    .attr("height", y.bandwidth() )
	    .attr("fill", "#69b3a2")
      .on("mouseover", mouseover )
      .on("mousemove", mousemove )
      .on("mouseleave", mouseleave );
    });

	return (
    <div id={"body"+props.id}>
      <svg className={"horizontalBarChart"} id={"svg"+props.id} viewBox={[0, 0, width, height]}/>
    </div>
	    );

};
