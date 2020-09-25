webpackHotUpdate("static/development/pages/landing.js",{

/***/ "./pages-sections/CountryCard.js":
/*!***************************************!*\
  !*** ./pages-sections/CountryCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_SimpleHorizontalBarChart_SimpleHorizontalBarChart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js */ "./components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js");
/* harmony import */ var assets_jss_common_pages_sections_mapStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/common/pages/sections/mapStyle.js */ "./assets/jss/common/pages/sections/mapStyle.js");
var _jsxFileName = "/Users/stliu/covid19ldc/pages-sections/CountryCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_common_pages_sections_mapStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CountryCard(props) {
  var classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, props.country), __jsx("div", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, props.countrycounts[props.countryCode], " Responses ")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Expected Revenue Change"), __jsx(components_SimpleHorizontalBarChart_SimpleHorizontalBarChart_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: props.countryrevchange,
    countrycode: props.countryCode,
    id: "revChange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 122
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, "Most Critical Business Challenges Reported"), __jsx(components_SimpleHorizontalBarChart_SimpleHorizontalBarChart_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: props.countrychallenges,
    countrycode: props.countryCode,
    id: "challenges",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 124
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Expected Timeframe Businesses Predict Being Able to Stay Open"), __jsx(components_SimpleHorizontalBarChart_SimpleHorizontalBarChart_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: props.countrytimeopen,
    countrycode: props.countryCode,
    id: "timeOpen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 120
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Expected Timeframe Businesses Predict Being Able to Stay Open"), __jsx(components_SimpleHorizontalBarChart_SimpleHorizontalBarChart_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: props.countrygovtsupport,
    countrycode: props.countryCode,
    id: "timeOpen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 123
    }
  })));
}
;

/***/ })

})
//# sourceMappingURL=landing.js.7287fe8f58d6034d3929.hot-update.js.map