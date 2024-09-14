<template>
  <div class="h-input">
    <label>
      {{ label }}
      <slot />
    </label>
    <ErrorMessage class="error-message" :name="name" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
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
    .ErrorMessage {
      color: #ff3a00;
      font-family: "Source Sans Pro";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 17.5px */
    }
  }
  .error-message {
    display: inline-block;
    margin-top: 4px;
    color: #ff3a00;
    font-size: 14px;
  }
}
</style>
