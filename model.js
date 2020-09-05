/**
 * @fileoverview the model class that stores data and handles all data interactions for the app.
 */

import Papa from "papaparse";

export default class Model {
  constructor(all_data) {
  	console.log(all_data);
    this.all_data = all_data;
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
