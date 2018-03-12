'use strict';
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("lootbag.sqlite");
const { children } = require("../data/bagOLoot");

module.exports.createTables = () => {
  return new Promise((resolve, reject) => {
    db
      .run(`DROP TABLE IF EXISTS children`)
      .run(
        `CREATE TABLE IF NOT EXISTS children (  )` ,
        err => {
          if (err) return reject(err);
          resolve(insertRows());
        }
      );
  });
};

