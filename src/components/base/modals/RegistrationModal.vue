<template>
  <div v-if="isOpen" class="wrapper" @click="closeRegistrationModal">
    <div class="modal" @click.stop>
      <div class="header">
        <img
          @click="closeRegistrationModal"
          src="@/assets/icons/modalCloseBtn.svg"
        />
      </div>
      <div class="body">
        <div class="title">Регистрация</div>
        <Form class="inputs" :validation-schema="schema">
          <HInput
            name="fullName"
            placeholder="Введите имя и фамилия"
            label="Имя и Фамилия"
          />
          <HInput name="login" placeholder="Введите login" label="Login" />
          <HInput
            name="email"
            placeholder="Введите email"
            label="Email"
            type="email"
          />
          <HInput name="password" label="Пароль" type="password" />
          <HInput
            name="repassword"
            label="Подтверждение пароля"
            type="password"
          />
        </Form>
        <div class="registration-btn">
          <HButton @click="$emit('open-confirm-email-modal', 'confirm-email')"
            >Зарегистрироваться</HButton
          >
        </div>
        <div class="account-exist">
          У вас уже есть аккаунт?
          <span @click="$emit('open-login-modal', 'login')" class="login"
            >Войти</span
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

const emit = defineEmits(["open-login-modal", "open-confirm-email-modal"]);

const closeRegistrationModal = () => {
  isOpen.value = false;
  document.body.style.overflow = "auto";
};

const schema = yup.object({
  fullName: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(/^[А-Яа-яЁё\s]+$/, "Допускаются только русские буквы")
    .max(50, "Не более 50 символов"),
  login: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(/^[a-zA-Zа-яА-Я0-9\s]+$/, "dsadasas"),
  email: yup
    .string()
    .email("Неверно введен e-mail")
    .required("Поле обязательно для заполнения")
    .max(50, "Не более 50 символов")
    .matches(
      /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]*$/,
      "Допускаются только русские буквы и цифры"
    ),
  password: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(8, "Пароль должен содержать не менее 8 символов")
    .max(16, "Пароль должен содержать не более 16 символов")
    .matches(
      /^([a-zA-Zа-яёА-ЯË0-9])(?=.*[A-Z])(?=.*\d).+$/,
      "Пароль должен содержать хотя бы одну заглавную букву и одну цифру"
    ),
  repassword: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
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
