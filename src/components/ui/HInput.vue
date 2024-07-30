<template>
  <div class="h-input">
    <label>
      {{ label }}
      <input :type :placeholder />
    </label>
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
  },
  error: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.h-input {
  label {
    color: #3d3d3d;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 6px;

    input {
      border-radius: 10px;
      border: 1px solid #003789;
      background: #fff;
      padding: 18px 16px;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }
  }
  .error {
    margin-top: 4px;
    color: #ff3a00;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
