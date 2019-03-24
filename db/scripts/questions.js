this.sqlite3 = require("sqlite3").verbose();
this.db = new this.sqlite3.Database("database.sqlite");
let fs = require('fs');

let sub_steps = require('./seeds/APP_SUBSTEPS');
let nothingToDo = ['a', 'b', 'c'];

let exam_id_index = 0;

sub_steps.forEach((e, i) => {

    e.EXAMS_TYPE.split('').forEach((exam_type, index) => {
        exam_id_index++;
        if (nothingToDo.includes(exam_type)) {
            return;
        }
        let exam = require(`./seeds/exams/APP_E_${e.PARENT_STEP}_${e.NUMBER}_${index + 1}`);
        let query = 'insert into questions (exam_id, data) values ';
        exam.forEach((question) => {
            let data = {
                text: question.TEXT,
            };
            Object.keys(question).slice(2).forEach((e) => {
                data[e] = question[e];
            });
            query += `(${exam_id_index},'${JSON.stringify(data)}'),`;
        });
        if (exam.length) {
            query = query.slice(0, query.length - 1);
            console.log(query + '\n');
            this.db.run(query);
        }


    })
});