<template>
  <button :class="['sign-up-btn', sizeClass]">Зарегистрироваться</button>
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
    "signup-btn-large": props.size === "large",
    "signup-btn-medium": props.size === "medium",
  };
});
</script>

<style scoped>
.signup-btn-large {
  border: none;
  display: flex;
  width: 465px;
  height: 76px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  background: #06f;
}

.signup-btn-medium {
  border: none;
  display: flex;
  width: 353px;
  height: 56px;
  padding: 17px 152px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  border-radius: 10px;
  background: #06f;
}
</style>
