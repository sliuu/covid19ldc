/**
 * @fileoverview the model class that stores data and handles all data interactions for the app.
 */

import Papa from "papaparse";

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

  static from_csv_string(csv_string) {
    const parsed_result = Papa.parse(csv_string, {
      header: true, // creates array of {head:value}
      dynamicTyping: false, // convert values to numbers if possible
      skipEmptyLines: true
    });
   	return new Model(parsed_result.data);
  }
}
