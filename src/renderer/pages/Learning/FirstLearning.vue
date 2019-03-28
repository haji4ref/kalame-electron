<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <el-card>
                    <div slot="header" class="text-success">
                        <i class="el-icon-plus"></i>
                        <span>توضیحات</span>
                    </div>

                    <div class="text-justify"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </div>
                </el-card>
            </div>
            <div class="col-6">
                <div class="d-flex align-items-center justify-content-around">
                    <!--{{size}}-->
                    <!--{{currentIndex}}-->
                    <el-button :disabled="currentIndex === size-1 || playing" icon="el-icon-arrow-right"
                               @click="goNext()"
                               type="primary" circle></el-button>
                    <div>
                        <div class="mx-auto image-container border-radius-4">
                            <img :src="images[currentIndex].src" alt>

                            <el-button :disabled="playing || !voiceActive || !  mediaController.hasSound"
                                       class="repeat el-icon-refresh" circle
                                       @click="playSound"></el-button>
                        </div>
                        <h4 class="text-justify text-center m-0 p-3 w-100" v-show="textActive">
                            {{texts[currentIndex]}}
                        </h4>
                    </div>

                    <el-button :disabled="currentIndex===0 || playing" icon="el-icon-arrow-left" @click="goBack"
                               type="primary"
                               circle></el-button>
                </div>

            </div>

            <div class="col-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span>صدا : </span>
                    <el-switch
                            v-model="voiceActive"
                    >
                    </el-switch>
                    <span>متن : </span>
                    <el-switch
                            v-model="textActive"
                    >
                    </el-switch>
                    <el-button type="success" @click="goToExam">
                        <i class="el-icon-check"></i>
                        برو به آزمون
                    </el-button>
                </div>

                <div>
                    <div>برو به :</div>
                    <!--<el-card>-->
                    <div class="go-to-list" ref="go_to_list">
                        <div class="p-2 cursor-pointer"
                             :class="{'go-to-list-active':currentIndex===index}"
                             v-for="(item,index) in texts"
                             @click="goTo(index)">
                            {{item}}
                        </div>
                    </div>
                    <!--</el-card>-->
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import MediaController from '../../classes/MediaController';

    export default {
        props: ['step', 'subStep'],
        data() {
            return {
                voiceActive: true,
                textActive: true,
                images: [],
                currentIndex: 0,
                texts: [],
                size: 0,
                currentSound: {},
                playing: false,
                goToListDOM: null,
                mediaController: {},
            }
        },
        created() {
            this.load();
        },
        watch: {
            subStep: {
                handler() {
                    this.load();
                },
                deep: true,
            }
        },
        methods: {
            goNext() {
                this.currentIndex++;
                this.playSound();
                let target = document.getElementsByClassName('go-to-list-active')[0];
                target.parentNode.scrollTop = target.offsetTop - 50;
            },
            goBack() {
                this.currentIndex--;
                this.playSound();
                let target = document.getElementsByClassName('go-to-list-active')[0];
                target.parentNode.scrollTop = target.offsetTop - 100;
            },
            goTo(index) {
                this.currentIndex = index;
                this.playSound();
            },
            playSound() {
                if (this.voiceActive && this.mediaController.hasSound) {
                    this.playing = true;
                    this.currentSound = this.mediaController.getSound(this.currentIndex);
                    this.currentSound.play();
                    this.currentSound.on('end', () => {
                        this.playing = false;
                    })
                }
            },
            load() {
                this.currentIndex = 0;
                this.mediaController = new MediaController(this.step.id, this.subStep.index);
                this.images = this.mediaController.getImages();
                this.texts = this.mediaController.getTexts();
                this.size = this.images.length;
            },
            goToExam() {
                this.$router.push({name: 'exam', params: {step: this.step, subStep: this.subStep}})
            }
        }
    };
</script>

<style>
    .image-container {
        border: 1.5px solid rgb(228, 233, 237);
        height: 500px;
        width: 500px;
        position: relative;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .image-controller {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #409EFF;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.8rem;
        color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    }

    .repeat {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.3rem;
    }

    .go-to-list {
        max-height: 480px;
        overflow-y: scroll;
        border: 1.5px solid rgb(228, 233, 237);
    }

    .go-to-list-active {
        background-color: rgba(116, 185, 255, 0.39);
    }
</style>
