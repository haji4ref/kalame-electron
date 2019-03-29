import Model from './Model';
export default class Exam extends Model {
    constructor(step, subStep) {
        super();

        this.stepID = step.id;

        this.subStepID = subStep.id;

        this.subStepIndex = subStep.index;

        this.query = `
        select type
        from exams
        where sub_step_id=${this.subStepID}`;

    }

    async init() {
        this._exam = await this.get();

        this.types = this._exam.map((e) => e.type);

        return this;
    }





}