#!/usr/bin/env node
'use strict';

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("lootbag.sqlite", err => {
  if (err) return console.log("db not working");
  console.log("Connection to db successful");
});

