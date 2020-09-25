import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import chroma from "chroma-js";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/common/pages/landingPage.js";

// Sections for this page
import BusinessProfilesSection from "pages-sections/BusinessProfilesSection.js";
import CovidImpactSection from "pages-sections/CovidImpactSection.js";
import MapSection from "pages-sections/MapSection.js";
import InfoSection from "pages-sections/InfoSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const bg = chroma("#01579b").alpha(0.6).hex();
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        title="Covid-19 LDC Market Survey"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive color={bg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
              <h1 className={classes.title}>
                Impact of Covid-19 on SMEs in the LDC Markets
              </h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <InfoSection />
          <BusinessProfilesSection
            femown_counts={props.femown_counts}
            femperc_counts={props.femperc_counts}
            bizstatus_counts={props.bizstatus_counts}
            numemploy_counts={props.numemploy_counts}
          />
          <MapSection
            countrycounts={props.country_counts}
            countrychallenges={props.country_x_challenges}
            countrytimeopen={props.country_x_timeopen}
            countryrevchange={props.country_x_revchange}
            countrygovtsupport={props.country_x_govtsupport}
          />
          <CovidImpactSection
            layoffbin_counts={props.layoffbin_counts}
            opcapacity_counts={props.opcapacity_counts}
            revchange_x_bizsector={props.revchange_x_bizsector}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
