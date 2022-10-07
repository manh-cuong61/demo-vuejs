<template>
  <h1>Show User</h1>
  <base-card class="flex flex-wrap`">
    <base-input
      classLabel="w-1/3 mx-4"
      v-model="user.first_name"
      label="First Name"
      idInput="first-name"
      disabled
    ></base-input>
    <base-input
      classLabel="w-1/3 mx-4"
      v-model="user.first_name"
      label="First Name"
      idInput="first-name"
      disabled
    ></base-input>
    <base-input
      classLabel="w-1/3 mx-4"
      v-model="user.first_name"
      label="First Name"
      idInput="first-name"
      disabled
    ></base-input>
    <base-input
      classLabel="w-1/3 mx-4"
      v-model="user.first_name"
      label="First Name"
      idInput="first-name"
      disabled
    ></base-input>
    <base-input
      classLabel="w-1/3 mx-4"
      v-model="user.first_name"
      label="First Name"
      idInput="first-name"
      disabled
    ></base-input>
    <base-input
      classLabel="w-1/3 mx-4"
      v-model="user.first_name"
      label="First Name"
      idInput="first-name"
      disabled
    ></base-input>
  </base-card>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Members from "../apis/members";

export default {
  async setup() {
    const router = useRoute();
    let user = ref({
      first_name: "",
    });

    Members.getDetail(router.params.id)
      .then((res) => (user.value = res.data))
      .catch((error) => console.log(error));

    return { user };
  },
};
</script>
