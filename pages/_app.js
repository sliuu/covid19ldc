import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import PageChange from "components/PageChange/PageChange.js";

import csv_string from 'example_data.csv';
import Model from "model.js"

import "assets/scss/common.scss?v=1.1.0";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  static async getInitialProps() {
    const model = Model.from_csv_string(csv_string);
    let pageProps = { all_data: model.get_all_data(),
                      femown_counts: model.get_femown_counts(),
                      submission_dates: model.get_submission_dates(),
                      revchange_x_bizsector: model.get_revchange_bizsector_rollup(),
                      country_counts: model.get_country_counts(),
                    };
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Covid-19 SME Survey in LDCs</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
