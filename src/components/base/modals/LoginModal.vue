<template>
  <div v-if="isOpen" class="wrapper">
    <div class="modal">
      <div class="header">
        <img
          @click="closeRegistrationModal"
          src="@/assets/icons/modalCloseBtn.svg"
          alt=""
        />
      </div>
      <div class="body">
        <div class="title">Регистрация</div>
        <div class="inputs">
          <HInput placeholder="Введите имя и фамилия" label="Имя и Фамилия" />
          <HInput placeholder="Введите имя и фамилия" label="Имя и Фамилия" />
          <HInput placeholder="Введите имя и фамилия" label="Имя и Фамилия" />
          <HInput placeholder="Введите имя и фамилия" label="Имя и Фамилия" />
          <HInput placeholder="Введите имя и фамилия" label="Имя и Фамилия" />
        </div>
        <div class="registration-btn">
          <HButton>Зарегистрироваться</HButton>
        </div>
        <div class="account-exist">
          У вас уже есть аккаунт? <span class="login">Войти</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HInput from "@/components/ui/HInput.vue";
import HButton from "@/components/ui/HButton.vue";

const isOpen = defineModel("open", { default: false });

const closeRegistrationModal = () => {
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
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    border-radius: 28px;

    .header {
      display: flex;
      justify-content: flex-end;
      padding: 34px 34px 8px 0;
      img {
        cursor: pointer;
      }
    }

    .body {
      padding: 0 93px 30px 70px;

      .title {
        color: $base-color;
        font-weight: 600;
        font-size: 35px;
        margin-bottom: 40px;
      }

      .inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 353px;
        margin-bottom: 18px;
      }
      .registration-btn {
        margin-bottom: 20px;

        .h-button {
          font-size: 16px;
          padding: 16px 93px;
        }
      }

      .account-exist {
        text-align: center;
        color: #4f4f4f;

        span {
          color: $base-color;
          cursor: pointer;
          font-weight: 700;
          text-decoration-line: underline;
        }
      }
    }
  }
}
</style>
