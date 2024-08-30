<template>
  <div class="card flex justify-center">
    <Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
  </div>
</template>

<script setup>
import Tree from "primevue/tree";
import { ref, onMounted } from "vue";
import { NodeService } from "@/service/NodeService";

const nodes = ref(null);

onMounted(() => {
  nodes.value = NodeService.getTreeNodes();
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
:deep(.p-tree-node-content) {
  display: flex;
  align-items: center;
}

:deep(.p-tree-node-label) {
  color: #84b4fc;
  font-size: 22px;
  font-weight: 600;
  padding: 0 0 0 15px;
}

:deep(.p-tree-node-icon.pi.pi-fw.pi-inbox) {
  max-width: 24px;
  max-height: 22px;
  content: url("@/assets/icons/sidebar/stages.svg");
}

:deep(.p-tree-node-toggle-button) {
  order: 1;
  margin-left: auto;
  content: none;
  content: url(@/assets/icons/sidebar/closeStep.svg);
}
</style>
