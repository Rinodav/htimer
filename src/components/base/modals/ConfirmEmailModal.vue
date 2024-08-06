<template>
  <div v-if="isOpen" class="wrapper" @click="closeConfirmEmailModal">
    <div class="modal" @click.stop>
      <div class="header">
        <img
          @click="closeConfirmEmailModal"
          src="@/assets/icons/modalCloseBtn.svg"
        />
      </div>
      <p class="confirm">
        Пожалуйста, подтвердите свой адрес электронной почты, чтобы завершить
        регистрацию.
      </p>
    </div>
  </div>
</template>

<script setup>
const isOpen = defineModel("open", { default: false });
const closeConfirmEmailModal = () => {
  isOpen.value = false;
  document.body.style.overflow = "auto";
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    border-radius: 28px;
    padding: 0 39px 92px 39px;
    .header {
      display: flex;
      justify-content: flex-end;
      padding: 34px 34px 8px 0;
      img {
        cursor: pointer;
      }
    }
    .confirm {
      max-width: 719px;
      text-align: center;
      font-size: 35px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -0.35px;
      color: $base-black;
    }
  }
}
</style>
