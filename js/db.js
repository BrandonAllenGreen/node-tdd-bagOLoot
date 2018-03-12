'use strict';
const sqlite3 = require('sqlite3').verbose();
const { createTables } = require("./makeTable");

(function createDb() {
  new sqlite3.Database('lootbag.sqlite', () => {
    createTables()
    .then( (data) => {
      // console.log("customer ids", data);
    })
    .catch( (err) => {
      console.log("oops", err);
    });
  });
}());