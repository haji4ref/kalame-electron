<template>
    <div>
        <k-header class="p-2" @learnSelected="learnSelected"></k-header>
        <div class="p-2">
            <el-card>
                <div slot="header" class="clearfix">
                    <span class="text-bold" v-if="isLoadedComplete">{{this.step.title}} : {{this.subStep.title}}</span>
                    <span v-else>👆برای شروع آزمون از قسمت بالا گام و زیر گام رو انتخاب کن</span>
                </div>
                <transition name="fade">
                    <div class="row" v-if="isLoadedComplete">
                        
                        <div class="col-3">توضیحات</div>
                        <component class="col-6" v-if="examController" :is="componentLoader" :controller="examController"></component>
                        <div class="col-3">گزارش</div>
                        
                    </div>
                </transition>
            </el-card>
        </div>
    </div>
</template>

<script>
    import KHeader from '../components/KHeader';
    import Exam from '../classes/Model/Exam.js';
    import ExamController from '../classes/Exams/ExamController.js';

    export default {
        components: {
            KHeader
        },
        data() {
            return {
                subStep: null,
                step: null,
                exam: null,
                examController: null,
                examComponent: null
            }
        },
        async created() {
            this.step = this.$route.params.step;
            this.subStep = this.$route.params.subStep;

            this.exam = new Exam(this.step, this.subStep);

            await this.exam.init();

            this.examController = new ExamController(this.exam, 0);

            this.examComponent = this.examController.component;

            // console.log(this.examComponent);
        },
        computed: {
            isLoadedComplete() {
                return this.step !== null && this.subStep !== null;
            },
            componentLoader() {
                if (this.examComponent)
                    return () => import(`../components/Exams/${this.examComponent}`);
            }
        },
        methods: {
            learnSelected(data) {
                this.subStep = data.subStep;
                this.step = data.step;
                this.hasLearning = data.hasLearning;
            }
        }
    };
</script>

<style>
</style>