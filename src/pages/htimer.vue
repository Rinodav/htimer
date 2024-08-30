<template>
  <div class="wrapper">
    <Sidebar />
    <!-- <modalWrapper firstButtonStyle="1" title="title">
      <template #default>
        <h1>content</h1>
      </template>
      <template #buttons>
        <HButton class="variant-add">dobavit</HButton>
        <HButton class="variant-close">zakrit</HButton>
      </template>
    </modalWrapper> -->
  </div>
</template>

<script setup>
import Sidebar from "@/components/app/sidebar/Sidebar.vue";
import modalWrapper from "@/components/base/modals/modalWrapper.vue";
import HButton from "@/components/ui/HButton.vue";
</script>

<style lang="scss" scoped></style>
