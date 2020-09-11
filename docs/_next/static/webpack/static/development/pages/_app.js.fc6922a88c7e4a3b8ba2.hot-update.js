webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./model.js":
/*!******************!*\
  !*** ./model.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_surveycodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/surveycodes.js */ "./helpers/surveycodes.js");
/* harmony import */ var helpers_countrycodes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/countrycodes.js */ "./helpers/countrycodes.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @fileoverview the model class that stores data and handles all data interactions for the app.
 */






var Model = /*#__PURE__*/function () {
  function Model(all_data) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Model);

    this.all_data = all_data;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Model, [{
    key: "get_all_data",
    value: function get_all_data() {
      return this.all_data;
    }
  }, {
    key: "get_submission_dates",
    value: function get_submission_dates() {
      return this.all_data.map(function (dict) {
        return dict["enddate"];
      });
    }
  }, {
    key: "get_femown_counts",
    value: function get_femown_counts() {
      var femown_counts = {
        "1": 0,
        "2": 0
      };
      this.all_data.map(function (object) {
        var number = object["femown"];

        if (number in femown_counts) {
          femown_counts[number] += 1;
        }
      });
      return femown_counts;
    }
  }, {
    key: "get_revchange_bizsector_rollup",
    value: function get_revchange_bizsector_rollup() {
      var list = []; // Groups rows by business sector and expected
      // revenue changes.

      var groups = d3__WEBPACK_IMPORTED_MODULE_2__["groups"](this.all_data, function (d) {
        return helpers_surveycodes_js__WEBPACK_IMPORTED_MODULE_5__["BIZSECTOR_CODES"][d.bizsector];
      }, function (d) {
        return helpers_surveycodes_js__WEBPACK_IMPORTED_MODULE_5__["REVCHANGE_CODES"][d.revchange];
      });

      var _iterator = _createForOfIteratorHelper(groups),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key1 = _step.value;
          var obj = new Object();
          obj.name = key1[0];

          var _iterator2 = _createForOfIteratorHelper(key1[1]),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var key2 = _step2.value;
              obj[key2[0]] = key2[1].length;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          list.push(obj);
        } // Sorts from largest negative decreases
        // to largest positive increases.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      list = list.sort(function (a, b) {
        var a_sub = a['- >30%'] + a['- 10-30%'] + a['- <10%'];
        var b_sub = b['- >30%'] + b['- 10-30%'] + b['- <10%'];
        var a_all = a['- >30%'] + a['- 10-30%'] + a['- <10%'] + a['Neutral'] + a['+ >30%'] + a['+ 10-30%'] + a['+ <10%'];
        var b_all = b['- >30%'] + b['- 10-30%'] + b['- <10%'] + b['Neutral'] + b['+ >30%'] + b['+ 10-30%'] + b['+ <10%'];

        if (a_sub / a_all > b_sub / b_all) {
          return -1;
        }

        if (a_sub / a_all < b_sub / b_all) {
          return 1;
        }

        return 0;
      });
      return list;
    }
  }, {
    key: "get_country_counts",
    value: function get_country_counts() {
      var counts = {};
      var groups = d3__WEBPACK_IMPORTED_MODULE_2__["groups"](this.all_data, function (d) {
        return helpers_countrycodes_js__WEBPACK_IMPORTED_MODULE_6__["COUNTRY_CODES"][d.country];
      });

      var _iterator3 = _createForOfIteratorHelper(groups),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var key = _step3.value;
          counts[key[0]] = key[1].length;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return counts;
    }
  }, {
    key: "get_country_challenges_rollup",
    value: function get_country_challenges_rollup() {
      var dict = {};

      var _iterator4 = _createForOfIteratorHelper(this.all_data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var row = _step4.value;
          var country = helpers_countrycodes_js__WEBPACK_IMPORTED_MODULE_6__["COUNTRY_CODES"][row.country];

          if (!(country in dict)) {
            dict[country] = {};
          }

          var _iterator5 = _createForOfIteratorHelper(helpers_surveycodes_js__WEBPACK_IMPORTED_MODULE_5__["CHALLENGES_KEYS"]),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var challenge = _step5.value;
              var challenge_name = helpers_surveycodes_js__WEBPACK_IMPORTED_MODULE_5__["CHALLENGES_CODES_SHORT"][challenge];

              if (!(challenge_name in dict[country])) {
                dict[country][challenge_name] = 0;
              }

              dict[country][challenge_name] += parseInt(row[challenge]);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (!("total" in dict[country])) {
            dict[country]["total"] = 0;
          }

          dict[country]["total"] += 1;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return dict;
    }
  }, {
    key: "get_country_timeopen_rollup",
    value: function get_country_timeopen_rollup() {}
  }], [{
    key: "from_csv_string",
    value: function from_csv_string(csv_string) {
      var parsed_result = papaparse__WEBPACK_IMPORTED_MODULE_4___default.a.parse(csv_string, {
        header: true,
        // creates array of {head:value}
        dynamicTyping: false,
        // convert values to numbers if possible
        skipEmptyLines: true
      });
      return new Model(parsed_result.data);
    }
  }]);

  return Model;
}();



/***/ })

})
//# sourceMappingURL=_app.js.fc6922a88c7e4a3b8ba2.hot-update.js.map