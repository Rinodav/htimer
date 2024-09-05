<template>
  <header>
    <div class="logo">
      <img
        v-if="props.logoType === 'logoMainWhite'"
        :src="logoSrc"
        alt="White Logo"
        class="logo-main-white"
      />
      <img v-else :src="logoSrc" alt="Main Logo" class="logo-main" />
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  logoType: {
    type: String,
    default: "logoMain",
  },
});

const logoSrc = computed(() => {
  return props.logoType === "logoMainWhite"
    ? "/logoMainWhite.svg"
    : "/logoMain.svg";
});

console.log("props.logoType:", props.logoType);
console.log("logoSrc:", logoSrc.value);
</script>

<style lang="scss" scoped>
.logo-main {
  padding-top: 60px;
}

.logo-main-white {
  width: 100%;
}
</style>
