<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="hide-sidebar-btn">
        <img
          class="hide-sidebar"
          src="@/assets/icons/sidebar/hideSidebar.svg"
          alt=""
        />
      </div>
      <div class="logo">
        <Header logoType="logoMainWhite" />
      </div>
      <SidebarTree />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/app/header.vue";
import SidebarTree from "./SidebarTree.vue";
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
