<template>
  <div v-if="isOpen" class="wrapper" @click="closeLoginModal">
    <div class="modal" @click.stop>
      <div class="header">
        <img @click="closeLoginModal" src="@/assets/icons/modalCloseBtn.svg" />
      </div>
      <div class="body">
        <div class="title">Авторизация</div>
        <Form class="inputs" :validation-schema="schema">
          <HInput name="login" placeholder="Введите login" label="Login" />
          <HInput name="password" label="Пароль" type="password" />
        </Form>
        <div class="forgot-password">
          <span>Забыли пароль?</span>
        </div>
        <div class="registration-btn">
          <HButton>Ввойти</HButton>
        </div>
        <div class="account-exist">
          У вас нет аккаунта?
          <span
            @click="$emit('open-registration-modal', 'registration')"
            class="registration"
            >Зарегистрироваться</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HInput from "@/components/ui/HInput.vue";
import HButton from "@/components/ui/HButton.vue";
import { Form } from "vee-validate";
import * as yup from "yup";

const isOpen = defineModel("open", { default: false });

const emit = defineEmits(["open-registration-modal"]);

const closeLoginModal = () => {
  isOpen.value = false;
  document.body.style.overflow = "auto";
};

const schema = yup.object({
  login: yup.string().required("Поле обязательно для заполнения"),
  password: yup.string().required("Поле обязательно для заполнения"),
});
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

    .header {
      display: flex;
      justify-content: flex-end;
      padding: 34px 34px 8px 0;
      img {
        cursor: pointer;
      }
    }

    .body {
      padding: 0 93px 80px 70px;

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
        margin-bottom: 6px;
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

        .registration {
          color: $base-color;
          cursor: pointer;
          font-weight: 700;
          text-decoration-line: underline;
        }
      }

      .forgot-password {
        display: flex;
        justify-content: end;
        color: $base-color;
        color: #06f;
        font-weight: 600;
        line-height: 125%;
        margin-bottom: 40px;
      }
      .forgot-password span {
        cursor: pointer;
      }
    }
  }
}
</style>
