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
import FemaleOwnedSection from "pages-sections/FemaleOwnedSection.js";
import BusinessSectorsSection from "pages-sections/BusinessSectorsSection.js";
import MapSection from "pages-sections/MapSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const bg = chroma('red').alpha(0.2).hex();

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        title="Covid-19 SME LDCs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive color={bg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Covid-19 SME LDCs</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MapSection />
          <BusinessSectorsSection />
          <FemaleOwnedSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
