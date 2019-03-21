<template>
  <div class="side-bar-container">
    <div
      v-for="(item,index) in items"
      :key="index"
      @click="changePage(index)"
      :class="{active : index === selected}"
      class="mb-3 side_bar_item d-flex align-items-center flex-column p-2 box-shadow border-radius-4 cursor-pointer"
    >
      <img :src="item.icon" alt>
      <div class="mt-2 title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  data() {
    return {
      selected: null,
      items: [
        {
          title: "آموزش",
          icon: "static/icons/student/020-books.svg",
          page: "/learn"
        },
        {
          title: "آزمون",
          icon: "static/icons/student/014-test.svg",
          page:"/exam"
        },
        {
          title: "تنظیمات",
          icon: "static/icons/student/settings.svg",
          page:"/"
        }
      ]
    };
  },
  methods:{
    changePage(index){
      this.selected = index;
      this.$router.push(this.items[index].page);
    }
  }
};
</script>
<style>
.side-bar-container img {
  width: 70%;
}
.side_bar_item {
  background-color: white;
  transition: all 0.2s ease-in;
}
.side_bar_item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
}
.side_bar_item .title {
  font-size: 1.1em;
}
.active {
  color: #409eff;
}
</style>
