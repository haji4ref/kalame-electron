<template>
    <div>
        <k-header class="p-2" @learnSelected="learnSelected"></k-header>
        <div class="p-2">
            <el-card>
                <div slot="header" class="clearfix">
                    <span class="text-bold" v-if="this.subStep && this.step">{{this.step.title}} : {{this.subStep.title}}</span>
                    <span v-else>👆برای شروع آزمون از قسمت بالا گام و زیر گام رو انتخاب کن</span>
                </div>
                <transition name="fade">
                    <div v-if="this.subStep && this.step">
                        salam
                    </div>
                </transition>
            </el-card>
        </div>
    </div>
</template>

<script>
    import KHeader from '../components/KHeader';

    export default {
        components: {
            KHeader
        },
        data() {
            return {
                subStep: null,
                step: null,
            }
        },
        created(){
            console.log(this.$route.params);
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
