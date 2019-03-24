this.sqlite3 = require("sqlite3").verbose();
this.db = new this.sqlite3.Database("database.sqlite");
let fs = require('fs');

let steps = require('./seeds/APP_STEPS');

let query = "insert into steps (id,title) values";
steps.forEach((e, i) => {
    query += `(${e.STEP_NUMBER},'${e.NAME}')`;
    if (i + 1 !== steps.length)
        query += ',';
});
this.db.run(query);