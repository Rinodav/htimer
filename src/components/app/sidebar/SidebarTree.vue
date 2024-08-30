<template>
  <div class="card flex justify-center">
    <div>
      <Button label="Submit" @click="foo" />
    </div>
    <Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
  </div>
</template>

<script setup>
import Tree from "primevue/tree";
import Button from "primevue/button";

import { ref } from "vue";
// import { NodeService } from "@/service/NodeService";

const nodes = ref([
  {
    key: "0",
    label: "Этапы",
    data: "Documents Folder",
    icon: "pi pi-fw pi-inbox",
    // expandedIcon: "pi pi-fw pi-inbox",
    children: [
      {
        key: "0-0",
        label: "Work",
        data: "Work Folder",
        icon: "pi pi-fw pi-cog",
        children: [
          {
            key: "0-0-0",
            label: "Expenses.doc",
            icon: "pi pi-fw pi-file",
            data: "Expenses Document",
          },
          {
            key: "0-0-1",
            label: "Resume.doc",
            icon: "pi pi-fw pi-file",
            data: "Resume Document",
          },
        ],
      },
      {
        key: "0-1",
        label: "Home",
        data: "Home Folder",
        icon: "pi pi-fw pi-home",
        children: [
          {
            key: "0-1-0",
            label: "Invoices.txt",
            icon: "pi pi-fw pi-file",
            data: "Invoices for this month",
          },
        ],
      },
    ],
  },
]);

const foo = () => {
  nodes.value[0].children.push({
    key: "0-0-0",
    label: "Expenses.doc",
    icon: "pi pi-fw pi-file",
    data: "Expenses Document",
    children: [
      {
        key: "0-0-0",
        label: "Expenses.doc",
        icon: "pi pi-fw pi-file",
        data: "Expenses Document",
      },
    ],
  });
};
</script>

<style lang="scss" scoped></style>
