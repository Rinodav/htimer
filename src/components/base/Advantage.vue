<template>
  <div class="advantage">
    <div class="icon">
      <img src="@/assets/icons/descriptionIcon1.png" alt="" />
    </div>
    <div class="description">
      <div class="title">Интуитивное управление</div>
      <div class="subtitle">
        С легкостью добавляйте, отслеживайте и завершайте задачи благодаря
        простому и понятному интерфейсу.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.advantage {
  display: flex;
  gap: 21px;
  .icon {
    padding: 15px;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.05);
    background: #fff;
    max-height: 60px;
  }

  .description {
    .title {
      font-weight: 700;
      font-size: 28px;
      color: $base-black;
      margin-bottom: 9px;
    }
    .subtitle {
      color: #a6a6a6;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
    }
  }
}
</style>
