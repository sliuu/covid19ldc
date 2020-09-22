import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TabPanel from "components/TabPanel/TabPanel.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/common/pages/sections/covidImpactStyle.js";
import dynamic from "next/dynamic";

import PieChart from "components/PieChart/PieChart.js";
import LollipopChart from "components/LollipopChart/LollipopChart.js";
const HorizontalBarChart = dynamic(
  () => import("../components/HorizontalBarChart/HorizontalBarChart"),
  {
    ssr: false,
  }
);

const useStyles = makeStyles(styles);

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const GeneralStatsSubSection = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        aria-label="general stats tabs"
        centered
      >
        <Tab label="Business Layoffs" {...a11yProps(0)} />
        <Tab label="Current operating capacity" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PieChart id={"layoffbin_svg"} key={5} data={props.layoffbin_counts} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LollipopChart
          id={"opcapacity_svg"}
          key={6}
          data={props.opcapacity_counts}
        />
      </TabPanel>
    </div>
  );
};
export default function CovidImpactSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {" "}
          <h2 className={classes.title}>Impact of COVID-19</h2>
          <h4 className={classes.description}>
            SMEs have suffered significant reduction in business capacity and
            many have had to lay-off staff.{" "}
          </h4>
          <GeneralStatsSubSection
            layoffbin_counts={props.layoffbin_counts}
            opcapacity_counts={props.opcapacity_counts}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
        {" "}
        <h5 className={classes.description}>
          Self-reported expected revenue changes ranged from expected decreases
          of > -30% to expected increases of > 30%.
        </h5>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <HorizontalBarChart data={props.revchange_x_bizsector} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
