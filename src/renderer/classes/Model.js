export default class Model {
    constructor() {
        this.sqlite3 = require("sqlite3").verbose();
        this.db = new this.sqlite3.Database("database.sqlite");
        this.query = "";
        this.hasWhere = false;
    }
    query() {
        return this.query;
    }

    get() {
        return new Promise((resolve) => {
            this.db.all(this.query, function (err, rows) {
                resolve(rows);
            });
        })
    }


}