webpackHotUpdate("static/development/pages/landing.js",{

/***/ "./pages-sections/MapSection.js":
/*!**************************************!*\
  !*** ./pages-sections/MapSection.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_SimpleHorizontalBarChart_SimpleHorizontalBarChart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js */ "./components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js");
/* harmony import */ var pages_sections_CountryCard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages-sections/CountryCard.js */ "./pages-sections/CountryCard.js");
/* harmony import */ var assets_jss_common_pages_sections_mapStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/jss/common/pages/sections/mapStyle.js */ "./assets/jss/common/pages/sections/mapStyle.js");
var _jsxFileName = "/Users/stliu/covid19ldc/pages-sections/MapSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_common_pages_sections_mapStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
var VectorMap = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-jvectormap */ "./node_modules/react-jvectormap/build/index.js", 7)).then(function (m) {
    return m.VectorMap;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-jvectormap */ "./node_modules/react-jvectormap/build/index.js")];
    },
    modules: ["react-jvectormap"]
  }
});

var scrollToRef = function scrollToRef(ref) {
  return window.scrollTo(0, ref.current.offsetBottom);
};

var _require = __webpack_require__(/*! country-list */ "./node_modules/country-list/country-list.js"),
    getCode = _require.getCode,
    getName = _require.getName,
    getData = _require.getData;

function MapSection(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showCountryCard = _useState[0],
      setShowCountryCard = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      countryCode = _useState3[0],
      setCountryCode = _useState3[1];

  var countryCardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var executeScroll = function executeScroll() {
    return scrollToRef(countryCardRef);
  };

  console.log(props.countrytimeopen);
  console.log(props.countryrevchange);

  function handleClick(e, code) {
    setCountryCode(code);
    setCountry(getName(code));
    setTimeout(function () {
      Array.from(document.getElementsByClassName("jvectormap-tip")).forEach(function (el) {
        el.style.display = 'none';
      });
    }, 100);

    if (props.countrycounts[code] > 9) {
      setShowCountryCard(true);
      if (countryCardRef.current !== null) countryCardRef.current.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    }
  }

  var toolTipCountry = function toolTipCountry(e, el, code) {
    if (!(code in props.countrycounts)) {
      el.html(el.html()).css("z-index", "-1");
    } else {
      el.css("z-index", "11").css("fontSize", "15px");
      el.html('<b>' + el.html() + '</b>' + '</br>' + props.countrycounts[code] + ' responses');
    }
  };

  return __jsx("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Countries Surveyed"), __jsx("h4", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Note: Country-specific information for countries with < 10 responses are not shown for privacy reasons."), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(VectorMap, {
    map: "world_mill",
    backgroundColor: "transparent",
    zoomOnScroll: false,
    containerStyle: {
      width: "100%",
      height: "700px"
    },
    onRegionClick: handleClick,
    containerClassName: "map",
    focusOn: {
      x: 0.6,
      y: 0.6,
      scale: 2,
      animate: true
    },
    panOnDrag: true,
    showTooltip: true,
    regionStyle: {
      initial: {
        fill: "#e4e4e4",
        "fill-opacity": 0.9,
        "stroke-width": 0,
        "stroke-opacity": 0
      },
      hover: {
        cursor: "pointer"
      }
    },
    onRegionTipShow: toolTipCountry,
    series: {
      regions: [{
        values: props.countrycounts,
        scale: ['#b2ebf2', '#0277bd'],
        normalizeFunction: "polynomial"
      }]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: showCountryCard ? "block" : "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(pages_sections_CountryCard_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    country: country,
    countryCode: countryCode,
    countrychallenges: props.countrychallenges,
    countrycounts: props.countrycounts,
    countrytimeopen: props.countrytimeopen,
    countryrevchange: props.countryrevchange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  })), __jsx("div", {
    ref: countryCardRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  })))));
}
;

/***/ })

})
//# sourceMappingURL=landing.js.ddf65d95648b70df7f1e.hot-update.js.map