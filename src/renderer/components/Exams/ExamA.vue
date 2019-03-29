<template>
    <div>
        <div class="mx-auto image-container border-radius-4">
            <img :src="images[index].src" alt>
        </div>

        <div class="my-4 text-center">
            <el-input @keyup.enter.native="check" @input="changeToPersian" v-model="answer" class="w-50"
                placeholder="جواب درست رو اینجا وارد کن">
            </el-input>
        </div>
    </div>
</template>

<script>
    import MediaController from '../../classes/MediaController.js';

    export default {
        props: ['controller'],
        data() {
            return {
                mediaController: null,
                index: 6,
                texts: [],
                images: [],
                answer: '',
                converts: require('../../utils/convertPersian.json'),
                answerLength: 0
            }
        },
        methods: {
            changeToPersian(data) {
                if (this.answerLength < data.length) {
                    this.answer = this.answer.split('').map((e) => {
                        let persianChar = this.converts[e];
                        return persianChar || e;
                    }).join('');
                    this.answerLength++;
                } else {
                    this.answerLength--;
                }
            },
            check() {
                let isCorrect = this.controller.check(this.answer, this.texts[this.index]);

                if (isCorrect) {
                    this.index++;
                    this.clear();
                } else {

                }
            },
            clear() {
                this.answer = '';
                this.answerLength = '';
            }
        },
        created() {
            this.mediaController = new MediaController(this.controller.exam.stepID, this.controller.exam.subStepIndex);

            this.texts = this.mediaController.getTexts();

            this.images = this.mediaController.getImages();

        }
    }
</script>

<style scoped>

</style>