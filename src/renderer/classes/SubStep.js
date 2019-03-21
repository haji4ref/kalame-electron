import Model from "./Model";

export default class SubStep extends Model {
    constructor(stepID = null) {
        super();
        if (stepID)
            this.stepID = stepID;
    }
    index() {
        if (this.stepID) {
            this.query = "select * from sub_steps where step_id=" + this.stepID;
        }
        return this;
    }
}