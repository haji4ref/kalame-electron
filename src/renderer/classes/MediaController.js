let fs = require('fs');
import {Howl, Howler} from 'howler';

export default class MediaController {
    constructor(stepId, subStepIndex) {
        this.stepId = stepId;
        this.subStepIndex = subStepIndex;
        this.picturesDirectory = `./data/step${this.stepId}/pictures/${this.subStepIndex + 1}/`;
        this.soundsDirectory = `./data/step${this.stepId}/sounds/${this.subStepIndex + 1}/`;

        this.hasSound = this._hasSound();
        this.hasPictures = this._hasPictures();
    }

    getImages() {
        let files = fs.readdirSync(this.picturesDirectory);
        return files
            .filter((e) => {
                return e.includes('.jpg');
            }).sort((a, b) => {
                return parseInt(a.replace('.jpg', '')) - parseInt(b.replace('.jpg', ''));
            }).map((e) => {
                return {
                    src: `${this.picturesDirectory}${e}`
                }
            })
    }

    getTexts() {
        let array = fs.readFileSync(`${this.picturesDirectory}text.txt`).toString().split("\n");
        return array.splice(1);
    }

    getSound(index) {
        return new Howl({
            src: [`${this.soundsDirectory}${index + 1}.mp3`]
        });
    }

    _hasSound() {
        if (fs.existsSync(this.soundsDirectory)) {
            let files = fs.readdirSync(`${this.soundsDirectory}`);
            let hasMp3 = files.find((e) => e.includes('.mp3'));
            return files.length && hasMp3;
        }
        return false;
    }

    _hasPictures() {
        return fs.existsSync(this.picturesDirectory);
    }
}
