<template>
  <div class="sidebar-step" :class="{ active: active }" @click="$emit('click')">
    <i :class="`fas fa-${step.icon}`"></i>
    {{ step.name }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  step: Object,
  active: Boolean,
  icon: Boolean,
});
</script>

<style lang="scss" scoped>
.sidebar-step {
  color: #84b4fc;
  font-size: 22px;
  font-weight: 600;
}
</style>
