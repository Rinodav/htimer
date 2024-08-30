<template>
  <div class="wrapper">
    <div class="modal" @click.stop>
      <div class="header">
        <img @click="closeLoginModal" src="@/assets/icons/modalCloseBtn.svg" />
      </div>
      <div class="body">
        <div class="title">
          {{ title }}
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="buttons">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HButton from "@/components/ui/HButton.vue";
const closeLoginModal = () => {
  isOpen.value = false;
  document.body.style.overflow = "auto";
};

const buttonStyles = ["variant-add", "variant-delete", "variant-cancel"];

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  firstButtonStyle: {
    type: Number,
    default: 0,
  },
  secondButtonStyle: {
    type: Number,
    default: 0,
  },
  firstButtonName: {
    type: String,
    required: true,
  },
  secondButtonName: {
    type: String,
    required: true,
  },
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
    max-width: 447px;
    width: 100%;
    max-height: 602px;
    height: 100%;
    .header {
      display: flex;
      justify-content: flex-end;
      padding: 34px 34px 6px 0;
      img {
        cursor: pointer;
      }
    }

    .body {
      padding: 0 20px 32px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      max-height: 530px;
      .title {
        color: $base-black;
        font-size: 23px;
        font-weight: 600;
        align-self: center;
      }

      .content {
        align-self: center;
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

.buttons {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
</style>
