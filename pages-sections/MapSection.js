import React from "react";
import dynamic from 'next/dynamic';
import { mapData } from './MapData.js';
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/common/pages/sections/mapStyle.js";
const useStyles = makeStyles(styles);

const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false, }
);

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

const { getCode, getName, getData } = require("country-list");
const MapSection = () => {
	const classes = useStyles();
  return (
    <div className={classes.section}>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "700px"
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc" //color for the clicked country
          },
          selectedHover: {}
        }}
        
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </div>
  );
};
export default MapSection;
