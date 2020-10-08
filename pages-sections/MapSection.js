import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import chroma from "chroma-js";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import SimpleHorizontalBarChart from "../components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js";

import CountryCard from "../pages-sections/CountryCard.js";

import styles from "../assets/jss/common/pages/sections/mapStyle.js";
const useStyles = makeStyles(styles);

const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false }
);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetBottom);

const { getCode, getName, getData } = require("country-list");

export default function MapSection(props) {
  const classes = useStyles();
  const [showCountryCard, setShowCountryCard] = useState(false);
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const countryCardRef = useRef(null);
  const executeScroll = () => scrollToRef(countryCardRef);

  function handleClick(e, code) {
    if (code in props.countrycounts) {
      setCountryCode(code);
      setCountry(getName(code));
      setTimeout(() => {
        Array.from(document.getElementsByClassName("jvectormap-tip")).forEach(
          (el) => {
            el.style.display = "none";
          }
        );
      }, 100);
      if (props.countrycounts[code] > 9) {
        setShowCountryCard(true);
        if (countryCardRef.current !== null)
          countryCardRef.current.scrollIntoView({
            block: "end",
            behavior: "smooth",
          });
      }
    }
  }

  const toolTipCountry = (e, el, code) => {
    if (!(code in props.countrycounts)) {
      el.html(el.html()).css("z-index", "-1");
    } else {
      el.css("z-index", "11").css("fontSize", "15px");
      el.html(
        "<b>" +
          el.html() +
          "</b>" +
          "</br>" +
          props.countrycounts[code] +
          " responses"
      );
    }
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>Countries Surveyed</h2>
          <h4 className={classes.description}>
            {
              "Note: Country-specific information for countries with < 10 responses are not shown for privacy reasons."
            }
          </h4>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <VectorMap
                map={"world_mill"}
                backgroundColor="transparent"
                zoomOnScroll={false}
                containerStyle={{
                  width: "100%",
                  height: "700px",
                }}
                onRegionClick={handleClick}
                containerClassName="map"
                focusOn={{
                  x: 0.6,
                  y: 0.6,
                  scale: 2,
                  animate: true,
                }}
                panOnDrag={true}
                showTooltip={true}
                regionStyle={{
                  initial: {
                    fill: "#e4e4e4",
                    "fill-opacity": 0.9,
                    "stroke-width": 0,
                    "stroke-opacity": 0,
                  },
                  hover: {
                    cursor: "pointer",
                  },
                }}
                onRegionTipShow={toolTipCountry}
                series={{
                  regions: [
                    {
                      values: props.countrycounts,
                      scale: ["#b2ebf2", "#0277bd"],
                      normalizeFunction: "polynomial",
                    },
                  ],
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}></GridItem>
          </GridContainer>
          <div
            style={{
              display: showCountryCard ? "block" : "none",
            }}
          >
            <GridContainer justify="center">
              <CountryCard
                country={country}
                countryCode={countryCode}
                countrychallenges={props.countrychallenges}
                countrycounts={props.countrycounts}
                countrytimeopen={props.countrytimeopen}
                countryrevchange={props.countryrevchange}
                countrygovtsupport={props.countrygovtsupport}
              />
            </GridContainer>
            <div ref={countryCardRef} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
