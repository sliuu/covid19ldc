/**
 * @fileoverview the model class that stores data and handles all data interactions for the app.
 */

import * as d3 from "d3";
import { nest } from 'd3-collection';
import Papa from "papaparse";

import { REVCHANGE_CODES, BIZSECTOR_CODES, CHALLENGES_CODES_SHORT, CHALLENGES_KEYS, TIME_OPEN_CODES } from "helpers/surveycodes.js";
import { COUNTRY_CODES } from "helpers/countrycodes.js";

export default class Model {
  constructor(all_data) {
    this.all_data = all_data;
  }

  get_all_data() {
  	return this.all_data;
  }

  get_submission_dates() {
  	return this.all_data.map(dict => dict["enddate"]);
  }

  get_femown_counts() {
  	const femown_counts = {"1": 0, "2": 0};
  	this.all_data.map(object => {
  	  const number = object["femown"];
  	  if (number in femown_counts) {
  	  	femown_counts[number] += 1;
  	  }
  	});
  	return femown_counts;
  }

  get_revchange_bizsector_rollup() {
    var list = [];
    // Groups rows by business sector and expected
    // revenue changes.
    let groups = d3.groups(this.all_data,
      d => BIZSECTOR_CODES[d.bizsector],
      d => REVCHANGE_CODES[d.revchange]);
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
    list = list.sort(function(a, b) {
      let a_sub = a['- >30%'] + a['- 10-30%'] + a['- <10%'];
      let b_sub = b['- >30%'] + b['- 10-30%'] + b['- <10%'];
      let a_all = a['- >30%'] + a['- 10-30%'] + a['- <10%'] +
                  a['Neutral'] + a['+ >30%'] + a['+ 10-30%'] + a['+ <10%'];
      let b_all = b['- >30%'] + b['- 10-30%'] + b['- <10%'] +
                  b['Neutral'] + b['+ >30%'] + b['+ 10-30%'] + b['+ <10%'];
      if ((a_sub / a_all) > (b_sub / b_all)) {
        return -1;
      }
      if ((a_sub / a_all) < (b_sub / b_all)) {
        return 1;
      }
      return 0;
    });
    return list;
  }

  get_country_counts() {
    var counts = {};
    let groups = d3.groups(this.all_data,
      d => COUNTRY_CODES[d.country]);
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

  static from_csv_string(csv_string) {
    const parsed_result = Papa.parse(csv_string, {
      header: true, // creates array of {head:value}
      dynamicTyping: false, // convert values to numbers if possible
      skipEmptyLines: true
    });
   	return new Model(parsed_result.data);
  }
}
