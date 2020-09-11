import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SimpleHorizontalBarChart from "components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js";

import styles from "assets/jss/common/pages/sections/mapStyle.js";
const useStyles = makeStyles(styles);

export default function CountryCard(props) {
	const classes = useStyles();

  return (
			<div>
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>{ props.country }</h2>
          <div className={classes.description}>{ props.countrycounts[props.countryCode] } Responses </div>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
					  <h3 className={classes.title}>Most Critical Business Challenges Reported</h3>
            <SimpleHorizontalBarChart data={ props.countrychallenges } countrycode={ props.countryCode } id="challenges"/> <br/>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
						<h3 className={classes.title}>Expected Timeframe Businesses Predict Being Able to Stay Open</h3>
            <SimpleHorizontalBarChart data={ props.countrytimeopen } countrycode={ props.countryCode } id="timeOpen"/>
        </GridItem>
			</div>
  );
};
