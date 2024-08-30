<template>
  <div class="footer">
    <div class="container">
      <div class="decorative-line"></div>
      <div class="to-home" @click="$emit('scroll-to-top')">На главную</div>
      <div class="social-media">
        <img src="@/assets/icons/facebook.png" alt="icon" />
        <img src="@/assets/icons/instagram.png" alt="icon" />
        <img src="@/assets/icons/telegram.png" alt="icon" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.footer {
  background: #161c28;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  overflow: hidden;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .decorative-line {
      width: 646px;
      height: 5px;
      background: #fff;
      margin-bottom: 20px;
    }

    .to-home {
      font-size: 28px;
      font-weight: 300;
      margin-bottom: 20px;
      color: #fff;
      cursor: pointer;
      user-select: none;
    }

    .social-media {
      display: flex;
      justify-content: center;
      gap: 27px;
      & img {
        cursor: pointer;
      }
    }
  }
}
</style>
