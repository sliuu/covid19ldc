webpackHotUpdate("static/development/pages/landing.js",{

/***/ "./components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js":
/*!*************************************************************************!*\
  !*** ./components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleHorizontalBarChart; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var helpers_surveycodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/surveycodes.js */ "./helpers/surveycodes.js");

var _jsxFileName = "/Users/stliu/covid19ldc/components/SimpleHorizontalBarChart/SimpleHorizontalBarChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var formatValue = function formatValue(x) {
  return isNaN(x) ? "N/A" : x.toLocaleString("en");
};

var formatPercent = d3__WEBPACK_IMPORTED_MODULE_3__["format"](".1%"); // For wrapping text on the y-axis.

function wrap(text, width) {
  text.each(function () {
    var text = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1,
        // ems
    x = text.attr("x"),
        y = text.attr("y"),
        dy = 0,
        //parseFloat(text.attr("dy")),
    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));

      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).attr("y", y - 2);
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

;
function SimpleHorizontalBarChart(props) {
  if (props.countrycode === "") {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 12
      }
    });
  }

  var data = [];
  var total = 0;

  for (var _i = 0, _Object$entries = Object.entries(props.data[props.countrycode]); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (key === "total") {
      total = value;
    } else {
      var obj = new Object();
      obj.key = key;
      obj.value = value;
      data.push(obj);
    }
  }

  if (total === 0) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 12
      }
    });
  }

  data = data.sort(function (a, b) {
    if (a.value > b.value) {
      return -1;
    }

    if (a.value < b.value) {
      return 1;
    }

    return 0;
  });
  var width = 800;
  var margin = {
    top: 0,
    right: 50,
    bottom: 0,
    left: 150
  };
  var height = data.length * 40 + margin.top + margin.bottom;

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      row.value /= total;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#svg".concat(props.id)).selectAll("*").remove();
    var chart = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#svg".concat(props.id)).attr("viewBox", [0, 0, width, height]).style("display", "auto").style("overflow", "visible");
    var tooltip = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#body".concat(props.id)).append("div").style("position", "absolute").style("text-align", "center").style("z-index", "10").style("padding", "2px").style("font", "12px sans-serif").style("background", "lightsteelblue").style("border", "0px").style("border-radius", "8px").style("pointer-events", "none"); // Three tooltip helper functions

    var mouseover = function mouseover(event, d) {
      tooltip.style("visibility", "visible");
    };

    var mousemove = function mousemove(event, d) {
      tooltip.text(d.key + ": " + d.value.toFixed(2)).style("transform", "translate(".concat(event.offsetX, "px, ").concat(event.offsetY - chart.node().getBoundingClientRect().height, "px)")).style("visibility", "visible");
    };

    var mouseleave = function mouseleave(d) {
      tooltip.transition().duration(200).style("visibility", "hidden");
    };

    var color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().domain(data.map(function (d) {
      return d.key;
    })).range(d3__WEBPACK_IMPORTED_MODULE_3__["quantize"](d3__WEBPACK_IMPORTED_MODULE_3__["interpolateHcl"]("#fafa6e", "#2A4858"), data.map(function (d) {
      return d.key;
    }).length)).unknown("#ccc");
    var x = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([0, 1]).range([margin.left, width - margin.right]);
    chart.append("g").attr("transform", "translate(0," + height + ")").call(d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](x).ticks(width / 100, "%")).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr("font-size", '1.5em');
    var y = d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"]().domain(data.map(function (d) {
      return d.key;
    })).range([margin.top, height - margin.bottom]).padding(.08);
    chart.append("g").call(d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](y)).attr("transform", "translate(".concat(margin.left, ",0)")).selectAll(".tick text").attr("font-size", '1.5em').call(wrap, 300);
    chart.selectAll("myRect").data(data).enter().append("rect").attr("x", x(0)).attr("width", function (d) {
      return x(d.value) - x(0);
    }).attr("y", function (d) {
      return y(d.key);
    }).attr("height", y.bandwidth()) //.attr("fill", "#69b3a2")
    .attr("fill", function (d) {
      return color(d.key);
    }).on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
  });
  return __jsx("div", {
    id: "body" + props.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("svg", {
    className: "horizontalBarChart",
    id: "svg" + props.id,
    viewBox: [0, 0, width, height],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }));
}
;

/***/ })

})
//# sourceMappingURL=landing.js.dec3fbc0fc64cae0e760.hot-update.js.map