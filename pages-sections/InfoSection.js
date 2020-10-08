import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

import styles from "../assets/jss/common/pages/sections/infoSectionStyle.js";
const useStyles = makeStyles(styles);

const InfoSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Largest survey looking at the impact of Covid-19 on SMEs across
            <b> all 47 of the Least Developed Countries</b> with{" "}
            <b>2,300+ responses</b> collected from July 1 to August 21, 2020.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={4}>
          <hr />
        </GridItem>
      </GridContainer>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Will serve as a <b>baseline for SMEs in LDCs</b> to be able to track
            their progress and recovery in the future.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={4}>
          <hr />
        </GridItem>
      </GridContainer>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Identify effectiveness of SME relief measures and establish{" "}
            <b>best practices and policy innovations</b> to help governments and
            stakeholders navigate Covid-19 and future disruptions.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={4}>
          <hr />
        </GridItem>
      </GridContainer>
      <GridContainer justify="flex-start">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            Will help with{" "}
            <b>
              planning, resource allocation, programme improvement, and policy
              making
            </b>{" "}
            for the LDCs during the Covid-19 recovery period.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default InfoSection;
