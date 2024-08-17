<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="hide-sidebar-btn" @click="toggleSidebar">
        <img
          class="hide-sidebar"
          src="@/assets/icons/sidebar/hideSidebar.svg"
          alt=""
        />
      </div>
      <div class="logo">
        <Header logoType="logoMainWhite" />
      </div>
      <SidebarStep
        v-for="step in steps"
        :key="step.id"
        :step="step"
        :active="currentStep === step.id"
        @click="currentStep = step.id"
      />
      <SidebarItem
        v-if="currentStep"
        :step="steps.find((s) => s.id === currentStep)"
      />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/app/header.vue";
import HideSidebar from "@/assets/icons/sidebar/hideSidebar.svg";
import { ref } from "vue";
import SidebarStep from "@/components/ui/SidebarStep.vue";
import SidebarItem from "@/components/ui/SidebarItem.vue";

const steps = ref([
  { id: 1, name: "Этапы", items: ["Item 1.1", "Item 1.2"] },
  { id: 2, name: "Рейтинг", items: ["Item 2.1", "Item 2.2"] },
  { id: 3, name: "Задачи", items: ["Item 3.1", "Item 3.2"] },
  { id: 4, name: "Выгрузка", items: ["Item 4.1", "Item 4.2"] },
]);

const currentStep = ref(1);
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 319px;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #06f;
  padding: 0 20px;
  .logo {
    max-width: 217px;
    margin: 42px auto 32px;
  }
  .hide-sidebar-btn {
    position: absolute;
    right: -19px;
    top: 59px;
    max-width: 41px;
    max-height: 41px;
    border-radius: 100%;
    background-color: white;
    padding: 3px;
    .hide-sidebar {
      width: 100%;
    }
  }
}
</style>
