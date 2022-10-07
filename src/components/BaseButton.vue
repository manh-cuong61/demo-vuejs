<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="
      linkButton ? $router.push({ name: linkButton }) : $emit('eventClick')
    "
    v-if="label"
  >
    {{ label }}
  </button>
</template>

<style scope>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>

<script>
export default {
  props: {
    linkButton: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
