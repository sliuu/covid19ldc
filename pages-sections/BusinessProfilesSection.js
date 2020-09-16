import React from "react";
import d3 from "d3";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import TabPanel from "components/TabPanel/TabPanel.js";
import PieChart from "components/PieChart/PieChart.js";
import LollipopChart from "components/LollipopChart/LollipopChart.js";

import styles from "assets/jss/common/pages/sections/femaleOwnedStyle.js";

const useStyles = makeStyles(styles);

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function FemaleOwnedSection(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Business Profiles</h2>
          <h4 className={classes.description}>
            LDC SME profiles are unique in having a strong presence of female-owned and female-led businesses.
          </h4>
          <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab label="Female Owner and Board Member Presence" {...a11yProps(0)} />
            <Tab label="Percentage of Female Staff" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <PieChart data={props.femown_counts}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LollipopChart data={props.femperc_counts}/>
          </TabPanel>
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
