webpackHotUpdate("static/development/pages/landing.js",{

/***/ "./pages/landing.js":
/*!**************************!*\
  !*** ./pages/landing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var assets_jss_common_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/common/pages/landingPage.js */ "./assets/jss/common/pages/landingPage.js");
/* harmony import */ var pages_sections_FemaleOwnedSection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages-sections/FemaleOwnedSection.js */ "./pages-sections/FemaleOwnedSection.js");
/* harmony import */ var pages_sections_BusinessSectorsSection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages-sections/BusinessSectorsSection.js */ "./pages-sections/BusinessSectorsSection.js");
/* harmony import */ var pages_sections_MapSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pages-sections/MapSection.js */ "./pages-sections/MapSection.js");
/* harmony import */ var pages_sections_InfoSection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pages-sections/InfoSection.js */ "./pages-sections/InfoSection.js");

var _jsxFileName = "/Users/sliu/Documents/covid19ldc/pages/landing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons

 // core components








 // Sections for this page





var dashboardRoutes = [];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_common_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function LandingPage(props) {
  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  var bg = chroma_js__WEBPACK_IMPORTED_MODULE_4___default()('#01579b').alpha(0.6).hex();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "transparent",
    routes: dashboardRoutes,
    title: "Covid-19 LDC Market Survey",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  })), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    filter: true,
    responsive: true,
    color: bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 9,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Impact of Covid-19 on SMEs in the LDC Markets"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.main, classes.mainRaised),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(pages_sections_InfoSection_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(pages_sections_MapSection_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    countrycounts: props.country_counts,
    countrychallenges: props.country_x_challenges,
    countrytimeopen: props.country_x_timeopen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx(pages_sections_BusinessSectorsSection_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: props.revchange_x_bizsector,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(pages_sections_FemaleOwnedSection_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: props.femown_counts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=landing.js.b776583c24782d293a64.hot-update.js.map