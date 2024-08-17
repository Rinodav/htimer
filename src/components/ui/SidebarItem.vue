<template>
  <div class="sidebar-items">
    <div v-for="item in step.items" :key="item" class="sidebar-item">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  step: Object,
});
</script>
