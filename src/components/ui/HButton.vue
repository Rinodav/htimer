<template>
  <button :class="['h-button', `variant-${variant}`]">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

button {
  padding: 20px 30px;
  border: none;
  font-size: 24px;
  width: 100%;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    opacity: 0.8;
    transition-duration: 0.2s;
  }
}

.variant-filled {
  font-size: 23px;
  color: white;
  background-color: $base-color;
}

.variant-outline {
  font-size: 23px;
  color: $base-color;
  background-color: transparent;
}

.variant-add {
  font-size: 23px;
  color: white;
  background-color: $base-color;
  border-radius: 3px;
}

.variant-cancel {
  font-size: 23px;
  color: $base-color;
  background-color: transparent;
  border: 3px solid $base-color;
  border-radius: 3px;
}

.variant-delete {
  font-size: 23px;
  color: white;
  background-color: $base-red;
  border-radius: 3px;
}
</style>
