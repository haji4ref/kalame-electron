<template>
    <div>
        <k-header class="p-2" @learnSelected="learnSelected"></k-header>
        <div class="p-2">
            <el-card>
                <div slot="header" class="clearfix">
                    <span class="text-bold" v-if="this.subStep && this.step">{{this.step.title}} : {{this.subStep.title}}</span>
                    <span v-else>👆برای شروع آموزش از قسمت بالا گام و زیر گام رو انتخاب کن</span>
                </div>
                <transition name="fade">
                    <div v-if="this.subStep && this.step">
                        <first-learning v-if="hasLearning" :step="this.step" :subStep="subStep"/>
                        <div v-else="!hasLearning">
                            این گام آموزش نداره و باید به قسمت آزمون بری!
                        </div>
                    </div>
                </transition>
            </el-card>
        </div>
    </div>
</template>
<script>
    import KHeader from "../components/KHeader";
    import FirstLearning from './Learning/FirstLearning';

    export default {
        components: {
            KHeader,
            FirstLearning
        },
        data() {
            return {
                step: null,
                subStep: null,
                hasLearning: null,
            };
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
