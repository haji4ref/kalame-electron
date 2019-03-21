import Model from './Model';
import { resolve } from 'bluebird-lst';
import SubStep from './SubStep';
export default class Step extends Model {
    constructor(id = null) {
        super();
        if (id)
            this.subSteps = new SubStep(id);
    }

    index() {
        this.query = "select * from steps";
        return this;

    }
    where(key, value) {
        if (!this.hasWhere)
            this.query += "where";
        this.query += key + "=" + value;

        return this;
    }
}