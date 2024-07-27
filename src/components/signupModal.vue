<template>
  <div class="modal-content" v-if="isOpen" @click="closeModal">
    <div class="conteiner" @click.stop>
      <div class="signup">
        <button class="close-modal" @click="closeModal">
          <img src="../assets/icons/modalCloseBtn.svg" alt="Закрыть" />
        </button>
        <h1>Регистрация</h1>
        <p>Имя и Фамилия</p>
        <input type="text" placeholder="Введите имя и фамилию" />
        <p>Login</p>
        <input type="text" placeholder="Введите login" />
        <p>Email</p>
        <input type="email" placeholder="Введите email" />
        <p>Пароль</p>
        <input type="password" />
        <p>Подтверждение пароля</p>
        <input type="password" />
        <signupBtn style="margin-top: 20px" size="medium"></signupBtn>
        <p>
          У вас уже есть аккаунт?<span><a href="">Войти</a></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import signupBtn from "./signupBtn.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.conteiner {
  display: block;
  width: 517px;
  height: 799px;
  border-radius: 28px;
  background: #fff;
  position: relative;
  padding-left: 71px;
  padding-right: 71px;
  /* transform-origin: center center;
  transform: scale(0.9); */
}

.close-modal {
  position: absolute;
  top: 34px;
  right: 34px;
  border: none;
  background-color: transparent;
}

h1 {
  color: #06f;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 45.5px */
  letter-spacing: -0.35px;
  margin-bottom: 40px;
  margin-top: 70px;
}

p {
  flex-direction: column;
  margin-bottom: 6px;
  color: #3d3d3d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
}

span::before {
  content: "\00a0";
}

span a {
  color: #06f;
  font-weight: 700;
}

input {
  width: 353px;
  padding: 18px 16px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #003789;
  font-size: 16px;
  line-height: 125%;
}

p:last-child {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 71px;
}
</style>
