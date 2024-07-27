<template>
  <section class="first-section">
    <div class="container">
      <Header />
      <div class="intro-block">
        <h1>Мы здесь, чтобы повысить вашу продуктивность</h1>
        <img src="@/assets/images/introLine.svg" alt="" />
        <div class="login-buttons">
          <HButton outline>Войти</HButton>
          <HButton>Зарегистрироваться</HButton>
        </div>
      </div>
    </div>
    <img class="intro-img" src="@/assets/images/imageIntro.png" alt="" />
  </section>
  <section class="second-section">
    <div class="container">
      <div class="demonstration">
        <img src="@/assets/images/demonstration.png" alt="" />
      </div>
      <div class="advantages">
        <Advantage />
        <Advantage />
        <Advantage />
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "@/components/app/header.vue";
import HButton from "@/components/ui/HButton.vue";
import Advantage from "@/components/base/Advantage.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.first-section {
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 248, 254, 0.8) 50%,
    rgba(232, 240, 255, 0.9) 100%
  );
  position: relative;
  overflow: hidden;

  .intro-img {
    position: absolute;
    top: 0;
    right: -9%;
  }

  .intro-block {
    margin-top: 124px;
    padding-bottom: 260px;
    h1 {
      max-width: 520px;
      font-size: 65px;
      line-height: 63px;
      color: $base-black;
    }

    img {
      margin-top: 14px;
    }

    .login-buttons {
      max-width: 465px;
      .h-button:first-of-type {
        margin-bottom: 10px;
      }
    }
  }
}

.second-section {
  background: #f9f8fe;
  .container {
    display: flex;
    gap: 73px;
    margin-top: -40px;
  }
  .advantages {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
  }

  .demonstration {
    z-index: 1;
  }
}
</style>
