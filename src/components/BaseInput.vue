<template>
  <label class="flex flex-col" :class="classLabel" :for="idInput">
    <span class="text-gray-700 font-bold mb-2">{{ label }}</span>
    <input
      v-bind="$attrs"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="idInput"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="text-red-700 font-light" v-if="messageError">
      {{ messageError }}
    </p>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    idInput: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    classLabel: {
      type: String,
      default: "",
    },
    messageError: {
      type: String,
      default: "",
    },
  },
};
</script>
