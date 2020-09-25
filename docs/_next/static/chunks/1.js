(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/HorizontalBarChart/HorizontalBarChart.js":
/*!*************************************************************!*\
  !*** ./components/HorizontalBarChart/HorizontalBarChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HorizontalBarChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
var _jsxFileName = "/Users/stliu/covid19ldc/components/HorizontalBarChart/HorizontalBarChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var formatValue = function formatValue(x) {
  return isNaN(x) ? "N/A" : x.toLocaleString("en");
};

var formatPercent = d3__WEBPACK_IMPORTED_MODULE_2__["format"](".1%");
var slices = ['- >30%', '- 10-30%', '- <10%', 'Neutral', '+ <10%', '+ 10-30%', '+ >30%']; // Legend formatting.

var tickSize = 0;
var legendWidth = 350;
var legendHeight = 44 + tickSize;
var marginTop = 18;
var marginRight = 30;
var marginBottom = 16 + tickSize;
var marginLeft = 72;
var ticks = legendWidth / 64;
var title = "Expected Revenue Change";
function HorizontalBarChart(props) {
  var width = 500;
  var margin = {
    top: 30,
    right: 40,
    bottom: 0,
    left: 50
  };
  var height = props.data.length * 25 + margin.top + margin.bottom;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().domain(props.data.map(function (d) {
      return d.name;
    })).range([margin.top, height - margin.bottom]).padding(0.08);
    var x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().range([margin.left, width - margin.right]);

    var yAxis = function yAxis(g) {
      return g.attr("transform", "translate(".concat(margin.left, ",0)")).call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y).tickSizeOuter(0)).call(function (g) {
        return g.selectAll(".domain").remove();
      });
    };

    var xAxis = function xAxis(g) {
      return g.attr("transform", "translate(0,".concat(margin.top, ")")).call(d3__WEBPACK_IMPORTED_MODULE_2__["axisTop"](x).ticks(width / 100, "%")).call(function (g) {
        return g.selectAll(".domain").remove();
      });
    };

    var series = d3__WEBPACK_IMPORTED_MODULE_2__["stack"]().keys(slices).offset(d3__WEBPACK_IMPORTED_MODULE_2__["stackOffsetExpand"])(props.data).map(function (d) {
      return d.forEach(function (v) {
        return v.key = d.key;
      }), d;
    });
    var color = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]().domain(slices).range(d3__WEBPACK_IMPORTED_MODULE_2__["schemeSpectral"][slices.length]).unknown("#ccc");
    var chart = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#svg").attr("viewBox", [-60, 0, width + margin.right, height]).style("display", "auto").style("overflow", "visible");
    chart.append("g").selectAll("g").data(series).enter().append("g").attr("fill", function (d) {
      return color(d.key);
    }).selectAll("rect").data(function (d) {
      return d;
    }).join("rect").attr("x", function (d) {
      return x(d[0]);
    }).attr("y", function (d) {
      return y(d.data.name);
    }).attr("width", function (d) {
      return x(d[1]) - x(d[0]);
    }).attr("height", y.bandwidth()).append("title").text(function (d) {
      return "".concat(d.data.name, " ").concat(d.key, "\n            ").concat(formatPercent(d[1] - d[0]), " (").concat(formatValue(d.data[d.key]), ")");
    });
    chart.append("g").call(xAxis);
    chart.append("g").call(yAxis); // Add legend

    var x1 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([-1, color.range().length - 1]).rangeRound([marginLeft, legendWidth - marginRight]);
    var thresholds = color.domain();
    var legend = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#legend").attr("viewBox", [0, 0, legendWidth, legendHeight]).style("display", "auto");
    var tickFormat;
    var thresholdFormat = tickFormat === undefined ? function (d) {
      return d;
    } : typeof tickFormat === "string" ? d3__WEBPACK_IMPORTED_MODULE_2__["format"](tickFormat) : tickFormat;
    legend.append("g").selectAll("rect").data(color.range()).join("rect").attr("x", function (d, i) {
      return x1(i - 1);
    }).attr("y", marginTop).attr("width", function (d, i) {
      return x1(i) - x1(i - 1);
    }).attr("height", legendHeight - marginTop - marginBottom).attr("fill", function (d) {
      return d;
    });
    var tickValues = d3__WEBPACK_IMPORTED_MODULE_2__["range"](thresholds.length);

    tickFormat = function tickFormat(i) {
      return thresholdFormat(thresholds[i], i);
    };

    legend.append("g").attr("transform", "translate(-20, ".concat(legendHeight - marginBottom, ")")).call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x1).ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined).tickFormat(typeof tickFormat === "function" ? tickFormat : undefined).tickSize(tickSize).tickValues(tickValues)).call(function (g) {
      return g.select(".domain").remove();
    }).call(function (g) {
      return g.append("text").attr("x", marginLeft + 20).attr("y", marginTop + marginBottom - legendHeight - 6).attr("text-anchor", "start").text(title);
    });
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 3
    }
  }, __jsx("svg", {
    className: "f",
    id: "legend",
    viewBox: [0, 0, legendWidth, legendHeight],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }), __jsx("svg", {
    className: "horizontalBarChart",
    id: "svg",
    viewBox: [-60, 0, width, height],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }));
}
;

/***/ })

}]);
//# sourceMappingURL=1.js.map