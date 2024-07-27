<template>
  <button :class="[signinBtnClass, sizeClass]">Войти</button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "large",
  },
});

const sizeClass = computed(() => {
  return {
    "signin-btn-large": props.size === "large",
    "signin-btn-medium": props.size === "blue-medium",
  };
});
</script>

<style scoped>
.signin-btn-large {
  display: flex;
  width: 465px;
  height: 76px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #06f;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background-color: transparent;
}

.signin-btn-medium {
  display: flex;
  color: #06f;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  border: none;
  background-color: transparent;
  width: 353px;
  height: 56px;
  padding: 17px 152px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #06f;
  color: #fff;
  font-size: 16px;
}
</style>
