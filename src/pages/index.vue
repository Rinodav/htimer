<template>
  <main>
    <section class="section-intro">
      <img
        src="../assets/images/imageIntro.png"
        alt="TRACKER"
        class="image-intro"
      />
      <div class="container-intro">
        <img
          src="../assets/images/logoMain.svg"
          alt="TRACKER"
          class="logo-main"
        />
        <div class="intro">
          <div class="intro-auth">
            <h1 class="intro-title">
              Мы здесь, чтобы повысить вашу продуктивность
            </h1>
            <img
              src="../assets/images/introLine.svg"
              alt=""
              class="intro-line"
            />
            <signinBtn @click="openModal('signin')"></signinBtn>
            <signupBtn
              style="margin-top: 10px"
              @click="openModal('signup')"
            ></signupBtn>
            <signupModal
              :isOpen="modalStates.signup"
              @close="closeModal('signup')"
            ></signupModal>
            <signinModal
              :isOpen="modalStates.signin"
              @close="closeModal('signin')"
            ></signinModal>
          </div>
        </div>
      </div>
    </section>
    <section class="section-about-htimer">
      <div class="about-htimer">
        <img src="../assets/images/aboutTracker.png" alt="About htimer" />
        <div class="decription-list">
          <div class="description-item">
            <img src="../assets/icons/descriptionIcon1.svg" alt="Icon" />
            <div class="description">
              <h2 class="description-title">Интуитивное управление</h2>
              <p>
                С легкостью добавляйте, отслеживайте и завершайте задачи
                благодаря простому и понятному интерфейсу.
              </p>
            </div>
          </div>
          <div class="description-item">
            <img src="../assets/icons/descriptionIcon1.svg" alt="Icon" />
            <div class="description">
              <h2>Голосовой ввод</h2>
              <p>
                Добавляйте задачи и комментарии, не отвлекаясь от работы,
                благодаря нашей функции голосового ввода.
              </p>
            </div>
          </div>
          <div class="description-item">
            <img src="../assets/icons/descriptionIcon1.svg" alt="Icon" />
            <div class="description">
              <h2>Интуитивное управление</h2>
              <p>
                с легкостью добавляйте, отслеживайте и завершайте задачи
                благодаря простому и понятному интерфейсу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer></footer>
</template>

<script setup>
import { ref } from "vue";
import signinBtn from "../components/signinBtn.vue";
import signupBtn from "../components/signupBtn.vue";
import signupModal from "../components/signupModal.vue";
import signinModal from "../components/signinModal.vue";

const modalStates = ref({
  signup: false,
  signin: false,
});

const openModal = (modalName) => {
  modalStates.value[modalName] = true;
};

const closeModal = (modalName) => {
  modalStates.value[modalName] = false;
};
</script>

<style scoped>
.section-intro {
  margin: 0;
  padding: 0 100px 260px 100px;
  width: 100%;
  background-image: url(../assets/images/backgroundIntro.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 63px;
  position: relative;
}

.container-intro {
  max-width: 1250px;
  margin: 0 auto;
}

.intro {
  display: flex;
}

.intro-title {
  width: 520px;
  height: 207px;
  color: #191a15;
  font-size: 65px;
  font-style: normal;
  font-weight: 700;
  line-height: 63px; /* 96.923% */
}

.image-intro {
  height: 800px;
  position: absolute;
  top: 10%;
  right: -5%;
}

.logo-main {
  width: 266px;
  height: 69px;
}

.intro-title {
  margin: 124px 0 0 0;
}

.intro-line {
  width: 479px;
  margin: 14px 0 0 0;
}
</style>
