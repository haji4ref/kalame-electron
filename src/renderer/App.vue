<template>
    <div id="app">
        <div class="d-flex">
            <div class="content">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <div class="side_bar p-3" style="width:8%">
                <side-bar />
            </div>
        </div>


    </div>
</template>

<script>
    import Step from "./classes/Model/Step";
    import SideBar from "./components/SideBar";

    export default {
        name: "kalame-electron",
        components: {
            SideBar
        },
        data() {
            return {
                radio: false,
                item: {
                    aref: 'ads',
                    asda: 'asdad',
                    alie: 12,
                }
            };
        },
        methods: {

        },
    };
</script>

<style>
</style>