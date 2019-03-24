this.sqlite3 = require("sqlite3").verbose();
this.db = new this.sqlite3.Database("database.sqlite");
let fs = require('fs');

let sub_steps = require('./seeds/APP_SUBSTEPS');
query = "insert into sub_steps (id,title,step_id) values";
sub_steps.forEach((e, i) => {
    query += `(${e.ID},'${e.NAME}',${e.PARENT_STEP})`;
    if (i + 1 !== sub_steps.length)
        query += ',';
});
this.db.run(query);