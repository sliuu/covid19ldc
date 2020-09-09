import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/common/pages/sections/businessSectorsStyle.js";
import dynamic from 'next/dynamic';

const HorizontalBarChart = dynamic(() => import('../components/HorizontalBarChart/HorizontalBarChart'), {
  ssr: false
});

const useStyles = makeStyles(styles);

export default function BusinessSectorsSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Business Sectors Most Affected</h2>
          <h5 className={classes.description}>
            Self-reported expected revenue changes ranged from expected decreases
            of > -30% to expected increases of > 30%.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <HorizontalBarChart data={props.data}/>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
