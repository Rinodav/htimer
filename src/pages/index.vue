<template>
  <div class="wrapper">
    <section class="first-section">
      <div class="container">
        <Header />
        <div class="intro-block">
          <h1>Мы здесь, чтобы повысить вашу продуктивность</h1>
          <img src="@/assets/images/introLine.svg" alt="" />
          <div class="login-buttons">
            <HButton @click="openLoginModal" outline>Войти</HButton>
            <HButton @click="openRegistrationModal">Зарегистрироваться</HButton>
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
          <Advantage
            v-for="(advantage, index) in advantages"
            :key="advantage.id"
            :icon="advantage.icon"
            :title="advantage.title"
            :subtitle="advantage.subtitle"
          />
        </div>
      </div>
    </section>
  </div>
  <Footer />
  <RegistrationModal
    v-model:open="showRegistrationModal"
    @open-login-modal="switchModals"
    @open-confirm-email-modal="
      (showConfirmEmailModal = true), (showRegistrationModal = false)
    "
  />
  <LoginModal
    v-model:open="showLoginModal"
    @open-registration-modal="switchModals"
  />
  <ConfirmEmailModal
    v-model:open="showConfirmEmailModal"
    @open-confirm-email-modal="switchModals"
  />
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/app/header.vue";
import HButton from "@/components/ui/HButton.vue";
import Advantage from "@/components/base/Advantage.vue";
import RegistrationModal from "@/components/base/modals/RegistrationModal.vue";
import LoginModal from "@/components/base/modals/LoginModal.vue";
import Footer from "@/components/app/footer.vue";
import ConfirmEmailModal from "../components/base/modals/ConfirmEmailModal.vue";

const showRegistrationModal = ref(false);
const showLoginModal = ref(false);
const showConfirmEmailModal = ref(false);
const openLoginModal = () => {
  showLoginModal.value = true;
  document.body.style.overflow = "hidden";
};
const openRegistrationModal = () => {
  showRegistrationModal.value = true;
  document.body.style.overflow = "hidden";
};

const switchModals = (type) => {
  if (type === "login") {
    showLoginModal.value = true;
    showRegistrationModal.value = false;
  } else if (type === "confrim-email") {
    showConfirmEmailModal.value = true;
    showRegistrationModal.value = false;
  } else {
    showLoginModal.value = false;
    showRegistrationModal.value = true;
  }
};

const advantages = [
  {
    id: 0,
    icon: "/descriptionIcon1.svg",
    title: "Интуитивное управление",
    subtitle:
      "С легкостью добавляйте, отслеживайте и завершайте задачи благодаря простому и понятному интерфейсу.",
  },
  {
    id: 1,
    icon: "/descriptionIcon2.svg",
    title: "Голосовой ввод",
    subtitle:
      "Добавляйте задачи и комментарии, не отвлекаясь от работы, благодаря нашей функции голосового ввода.",
  },
  {
    id: 2,
    icon: "/descriptionIcon3.svg",
    title: "Интуитивное управление",
    subtitle:
      "С легкостью добавляйте, отслеживайте и завершайте задачи благодаря простому и понятному интерфейсу.",
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.wrapper {
  overflow: hidden;
}

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
    top: 10%;
    right: -9%;
    width: 60%;
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
    margin-top: -30px;
    margin-bottom: -30px;
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
