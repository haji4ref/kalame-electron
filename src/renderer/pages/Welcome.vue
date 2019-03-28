<template>
  <div class="welcome d-flex justify-content-center align-items-center">
    ‌
    <transition name="welcome" appear>
      <div class="d-flex flex-column align-items-center justify-content-center welcome-content pb-3">
        <img src="static/icons/emoji/033-laugh-1.svg" alt>
        <h1>سلام!</h1>
        <h3>برای شروع روی بخش آموزش در قسمت سمت راست کلیک کن</h3>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {};
</script>
<style>
  .welcome {
    height: 100%;
    color: rgb(34, 167, 240);
  }

  .welcome img {
    width: 300px;
  }

  .welcome-content {
    border-bottom: 2px solid #eee;
  }

  .welcome-enter-active,
  .welcome-leave-active {
    transition: all 0.5s;
  }

  .welcome-enter,
  .welcome-leave-to

  /* .welcome-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateY(-100px);
  }
</style>