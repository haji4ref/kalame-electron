<template>
    <div class="header-container d-flex align-items-center">
        <div class="mx-2">انتخاب گام و زیرگام :</div>
        <el-select v-model="stepId" placeholder="گام را انتخاب کنید" @change="fetchSubSteps">
            <el-option v-for="(item,index) in steps" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select>
        <i class="el-icon-arrow-left mx-2"></i>
        <el-select
                v-model="subStepIndex"
                placeholder="زیر گام را انتخاب کنید"
                :disabled="!subStepActive"
                @change="notifUpdate"
        >
            <el-option v-for="(item,index) in subSteps" :key="index" :label="item.title" :value="index"></el-option>
        </el-select>
    </div>
</template>

<script>
    import Step from "../classes/Model/Step";
    import MediaController from "../classes/MediaController";

    export default {
        name: "k-header",
        data() {
            return {
                stepId: null,
                subStepIndex: null,
                steps: [],
                subSteps: [],
                subStepActive: false
            };
        },
        methods: {
            async fetchSubSteps() {
                this.subStepIndex = null;
                this.$emit('learnSelected', {
                    step: this.steps.find(e => e.id === this.stepId),
                    subStep: null
                });
                if (this.stepId) {
                    this.subStepActive = true;
                    this.subSteps = await new Step(this.stepId).subSteps.index().get();
                }
            },
            notifUpdate() {
                let data = {
                    step: this.steps.find(e => e.id === this.stepId),
                    subStep: Object.assign(this.subSteps[this.subStepIndex], {index: this.subStepIndex}),
                    hasLearning: new MediaController(this.stepId, this.subStepIndex).hasPictures
                };
                this.$emit("learnSelected", data);
            }
        },
        mounted() {
            let steps = new Step();
            steps
                .index()
                .get()
                .then(res => {
                    this.steps = res;
                });
        }
    };
</script>

<style>
    .header-container {
        background-color: #eee;
    }
</style>


