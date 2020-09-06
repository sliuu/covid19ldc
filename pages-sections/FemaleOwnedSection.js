import React from "react";
import d3 from "d3";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import PieChart from "components/PieChart/PieChart.js";

import styles from "assets/jss/common/pages/sections/femaleOwnedStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Female-Owned Businesses</h2>
          <h4 className={classes.description}>
            More stuff
          </h4>
          <PieChart data={props.data}/>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
              </GridItem>
              />
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
