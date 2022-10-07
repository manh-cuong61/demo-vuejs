<template>
  <label
    for="countries"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    v-if="label"
    ><span>{{ label }}</span>
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled selected>Please select one</option>
      <slot></slot>
    </select>
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
    modelValue: {
      type: [String, Number],
      default: "",
    },
    messageError: {
      type: String,
      default: "",
    },
  },
};
</script>
