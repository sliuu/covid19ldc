import React from "react";
import * as d3 from "d3";

export default function PieChart(props) {
  const height = 400;
  const width = 400;
  var labels = Object.keys(props.data);
  var values = labels.map(function(key){
      return props.data[key];
  });

  const pie = d3.pie()(values);

  return (
    <svg viewBox={[0, 0, width, height]}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = props => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100);

  let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path key={index} d={arc(slice)} fill={sliceColor} />;
  });
};
