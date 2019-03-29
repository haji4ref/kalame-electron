const examDetail = {
    a: {
        component: 'ExamA',
        descritpion: '',
    }
}

export default class ExamController {
    constructor(exam, index) {
        this.exam = exam;

        this.type = exam.types[index];

        this.component = examDetail[this.type].component;
    }

    check(answer, expected) {
        if (this.type === 'a') {
            return this.checkThatContains(answer, expected);
        }
    }

    checkThatContains(answer, expected) {
        let removedWhiteSpaces = answer.replace(/ /g, '');
        console.log(removedWhiteSpaces);

        return removedWhiteSpaces === expected;
    }
}