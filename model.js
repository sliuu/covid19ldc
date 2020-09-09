/**
 * @fileoverview the model class that stores data and handles all data interactions for the app.
 */

import * as d3 from "d3";
import { nest } from 'd3-collection';
import Papa from "papaparse";

const bizsector_codes = {
  1: "Accommodation and catering",
  2: "Agriculture, forestry, animal husbandry, fisheries",
  3: "Construction industry",
  4: "Culture, sports and entertainment",
  5: "Education",
  6: "Financial industry",
  7: "Health and social work",
  8: "Information transmission, software and information technology services",
  9: "Leasing and business services",
  10: "Manufacturing industry",
  11: "Mining, oil and gas industry",
  12: "Production and supply of electricity, heat, gas and water",
  13: "Real estate industry",
  14: "Residential services, repair and other services",
  15: "Scientific research and technological services",
  16: "Tourism",
  17: "Transport, storage and postal industry",
  18: "Water, environment and public facilities management",
  19: "Wholesale and retail trade",
  0: "Other",
};

const revchange_codes = {1: "+ >30%",
                         2: "+ 10-30%",
                         3: "+ <10%",
                         4: "Neutral",
                         5: "- <10%",
                         6: "- 10-30%",
                         7: "- >30%",
                         8: "Neutral"};


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
      d => bizsector_codes[d.bizsector],
      d => revchange_codes[d.revchange]);
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

  static from_csv_string(csv_string) {
    const parsed_result = Papa.parse(csv_string, {
      header: true, // creates array of {head:value}
      dynamicTyping: false, // convert values to numbers if possible
      skipEmptyLines: true
    });
   	return new Model(parsed_result.data);
  }
}
