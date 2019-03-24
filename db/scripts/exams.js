this.sqlite3 = require("sqlite3").verbose();
this.db = new this.sqlite3.Database("database.sqlite");
let fs = require('fs');

let sub_steps = require('./seeds/APP_SUBSTEPS');
let query = "insert into exams (sub_step_id,type) values";
sub_steps.forEach((e, i) => {
    for (let j = 0; j < e.EXAMS_TYPE.length; j++) {
        query += `(${e.ID},'${e.EXAMS_TYPE[j]}'),`;
    }

    if (i + 1 === sub_steps.length)
        query = query.slice(0,query.length-1);

});
console.log(query);