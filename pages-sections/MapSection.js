import React, { useState, useRef } from "react";
import dynamic from 'next/dynamic';
import chroma from "chroma-js";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/common/pages/sections/mapStyle.js";
const useStyles = makeStyles(styles);

const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false, }
);

/// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const { getCode, getName, getData } = require("country-list");

export default function MapSection(props) {
	const classes = useStyles();
  const [showCountryCard, setShowCountryCard] = useState(false);
  const [country, setCountry] = useState("");
  const countryCardRef = useRef(null)
  // const executeScroll = () => scrollToRef(countryCardRef)

  function handleClick(e, countryCode){
    setTimeout(()=> { Array.from(
      document.getElementsByClassName("jvectormap-tip"))
      .forEach((el) => { el.style.display = 'none' }); },100);
    setShowCountryCard(true);
    setCountry(getName(countryCode));
    // executeScroll();
  }

  const toolTipCountry = (e, el, code) => {
    if (!(code in props.data)) {
      el.html(el.html()).css("z-index","-1");
    } else {
      el.css("z-index","11").css("fontSize","15px");
      el.html('<b>' + el.html() + '</b>' + '</br>' + props.data[code] + ' responses');
    }
  };

  return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Countries Surveyed</h2>
            <h4 className={classes.description}>
              Highest number of responses from X <br/>
              X Responses from Africa, etc.
            </h4>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
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
                    focusOn={{
                      x: 0.6,
                      y: 0.6,
                      scale: 2,
                      animate: true
                    }}
                    panOnDrag={true}
                    showTooltip={true}
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        //stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                      // hover: {
                      //   "fill-opacity": 0.8,
                      //   cursor: "pointer"
                      // }
                      // selected: {
                      //   fill: "#2938bc" //color for the clicked country
                      // }
                      // selectedHover: {}
                    }}
                    //onRegionTipShow={function(e, el, code){
                    //  el.html("fdsjfds");
                    //}}
                    // regionsSelectable={true}
                    onRegionTipShow={toolTipCountry}
                    //onRegionOver={toolTipCountry}
                    //onLabelShow={toolTipCountry}
                    series={{
                      regions: [
                        {
                          values: props.data,
                          scale: ['#b2ebf2', '#0277bd'],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </GridItem>
                <div style={{
                    display: showCountryCard ? "block" : "none"}}>
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>{ country }</h2>
                  <div ref={countryCardRef}></div>
                </GridItem>
              </div>
              </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
  );
};
