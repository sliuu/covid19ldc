/**
 * @fileoverview the model class that stores data and handles all data interactions for the app.
 */

import * as d3 from "d3";
import { nest } from "d3-collection";
import Papa from "papaparse";

import {
  REVCHANGE_CODES,
  BIZSECTOR_CODES,
  BIZSTATUS_CODES,
  NUMEMPLOY_CODES,
  CHALLENGES_CODES_SHORT,
  CHALLENGES_KEYS,
  TIME_OPEN_CODES,
  FEMOWN_CODES,
  FEMPERC_CODES,
  GOVT_SUPPORT_CODES,
  GOVT_SUPPORT_KEYS,
  OPCAPACITY_CODES,
  LAYOFFBIN_CODES,
} from "helpers/surveycodes.js";
import { COUNTRY_CODES } from "helpers/countrycodes.js";

export default class Model {
  constructor(all_data) {
    this.all_data = all_data;
  }

  get_all_data() {
    return this.all_data;
  }

  get_submission_dates() {
    return this.all_data.map((dict) => dict["enddate"]);
  }

  get_femown_counts() {
    const femown_counts = { 1: 0, 2: 0 };
    return this._get_counts_list_for_feature(
      "femown",
      femown_counts,
      FEMOWN_CODES
    );
  }

  get_femperc_counts() {
    const femperc_counts_dict = { 1: 0, 2: 0, 3: 0, 4: 0 };
    return this._get_counts_list_for_feature(
      "femperc",
      femperc_counts_dict,
      FEMPERC_CODES
    );
  }

  get_bizstatus_counts() {
    const bizstatus_counts_dict = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 0: 0 };
    return this._get_counts_list_for_feature(
      "bizstatus",
      bizstatus_counts_dict,
      BIZSTATUS_CODES
    );
  }

  get_numemploy_counts() {
    const numemploy_counts_dict = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    return this._get_counts_list_for_feature(
      "numemploy",
      numemploy_counts_dict,
      NUMEMPLOY_CODES
    );
  }

  get_opcapacity_counts() {
    const opcapacity_counts_dict = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    return this._get_counts_list_for_feature(
      "opcapacity",
      opcapacity_counts_dict,
      OPCAPACITY_CODES
    );
  }

  get_layoffbin_counts() {
    const layoffbin_counts_dict = { 1: 0, 2: 0, 3: 0 };
    return this._get_counts_list_for_feature(
      "layoffbin",
      layoffbin_counts_dict,
      LAYOFFBIN_CODES
    );
  }

  get_revchange_bizsector_rollup() {
    var list = [];
    // Groups rows by business sector and expected
    // revenue changes.
    let groups = d3.groups(
      this.all_data,
      (d) => d.bizsector2,
      (d) => REVCHANGE_CODES[d.revchange]
    );
    for (let key1 of groups) {
      let obj = new Object();
      obj.name = key1[0];
      for (let key2 of key1[1]) {
        obj[key2[0]] = key2[1].length;
      }
      list.push(obj);
    }
    // Sorts from largest negative decreases
    // to largest positive increases.
    list = list.sort(function (a, b) {
      let a_sub =
        a["- >30%"] + a["- 10-30%"] + ("- <10%" in a ? a["- <10%"] : 0);
      let b_sub =
        b["- >30%"] + b["- 10-30%"] + ("- <10%" in b ? b["- <10%"] : 0);
      let a_all =
        a["- >30%"] +
        a["- 10-30%"] +
        ("- <10%" in a ? a["- <10%"] : 0) +
        a["Neutral"] +
        a["+ >30%"] +
        a["+ 10-30%"] +
        ("+ <10%" in a ? a["+ <10%"] : 0);
      let b_all =
        b["- >30%"] +
        b["- 10-30%"] +
        ("- <10%" in b ? b["- <10%"] : 0) +
        b["Neutral"] +
        b["+ >30%"] +
        b["+ 10-30%"] +
        ("+ <10%" in b ? b["+ <10%"] : 0);
      if (a_sub / parseFloat(a_all) > b_sub / parseFloat(b_all)) {
        return -1;
      }
      if (a_sub / parseFloat(a_all) < b_sub / parseFloat(b_all)) {
        return 1;
      }
      return 0;
    });
    return list;
  }

  get_country_counts() {
    var counts = {};
    let groups = d3.groups(this.all_data, (d) => COUNTRY_CODES[d.country]);
    for (let key of groups) {
      counts[key[0]] = key[1].length;
    }
    return counts;
  }

  get_country_challenges_rollup() {
    var dict = {};
    for (let row of this.all_data) {
      const country = COUNTRY_CODES[row.country];
      if (!(country in dict)) {
        dict[country] = {};
      }
      for (let challenge of CHALLENGES_KEYS) {
        const challenge_name = CHALLENGES_CODES_SHORT[challenge];
        if (!(challenge_name in dict[country])) {
          dict[country][challenge_name] = 0;
        }
        dict[country][challenge_name] += parseInt(row[challenge]);
      }
      if (!("total" in dict[country])) {
        dict[country]["total"] = 0;
      }
      dict[country]["total"] += 1;
    }
    return dict;
  }

  get_country_govtsupport_rollup() {
    var dict = {};
    for (let row of this.all_data) {
      const country = COUNTRY_CODES[row.country];
      if (!(country in dict)) {
        dict[country] = {};
      }
      for (let support of GOVT_SUPPORT_KEYS) {
        const support_name = GOVT_SUPPORT_CODES[support];
        if (!(support_name in dict[country])) {
          dict[country][support_name] = 0;
        }
        dict[country][support_name] += parseInt(row[support]);
      }
      if (!("total" in dict[country])) {
        dict[country]["total"] = 0;
      }
      dict[country]["total"] += 1;
    }
    return dict;
  }

  get_country_timeopen_rollup() {
    var dict = {};
    for (let row of this.all_data) {
      const country = COUNTRY_CODES[row.country];
      if (!(country in dict)) {
        dict[country] = {};
      }
      const code_name = TIME_OPEN_CODES[row.timeopen];
      if (!(code_name in dict[country])) {
        dict[country][code_name] = 0;
      }
      dict[country][code_name] += 1;
      if (!("total" in dict[country])) {
        dict[country]["total"] = 0;
      }
      dict[country]["total"] += 1;
    }
    return dict;
  }

  get_country_revchange_rollup() {
    var dict = {};
    for (let row of this.all_data) {
      const country = COUNTRY_CODES[row.country];
      if (!(country in dict)) {
        dict[country] = {};
      }
      for (let idx in REVCHANGE_CODES) {
        const revchange = REVCHANGE_CODES[idx];
        if (!(revchange in dict[country])) {
          dict[country][revchange] = 0;
        }
      }
      if (row.revchange in REVCHANGE_CODES) {
        dict[country][REVCHANGE_CODES[row.revchange]] += 1;
      }
      if (!("total" in dict[country])) {
        dict[country]["total"] = 0;
      }
      dict[country]["total"] += 1;
    }
    return dict;
  }

  static from_csv_string(csv_string) {
    const parsed_result = Papa.parse(csv_string, {
      header: true, // creates array of {head:value}
      dynamicTyping: false, // convert values to numbers if possible
      skipEmptyLines: true,
    });
    return new Model(parsed_result.data);
  }

  _get_counts_dict_for_feature(feature_name, empty_counts_dict) {
    this.all_data.map((object) => {
      const number = object[feature_name];
      if (number in empty_counts_dict) {
        empty_counts_dict[number] += 1;
      }
    });
  }

  _get_counts_list_for_feature(
    feature_name,
    empty_counts_dict,
    survey_codes_dict
  ) {
    this._get_counts_dict_for_feature(feature_name, empty_counts_dict);

    let feature_counts = [];
    for (let key in survey_codes_dict) {
      feature_counts.push({
        name: survey_codes_dict[key],
        value: empty_counts_dict[key.toString()],
      });
    }
    return feature_counts;
  }
}
