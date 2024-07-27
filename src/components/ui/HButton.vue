<template>
  <button :class="['h-button', outline ? 'outline' : 'filled']">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  outline: Boolean,
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

.filled {
  color: white;
  background-color: $base-color;
}

.outline {
  color: $base-color;
  background-color: transparent;
}
</style>
