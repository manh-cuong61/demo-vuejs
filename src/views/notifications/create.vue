<template>
  <base-card>
    <base-input
      classLabel="w-1/3 mx-auto"
      v-model="notification.title"
      label="Title"
      idInput="title"
      :messageError="errors.title"
    ></base-input>
    <label
      mx-auto
      for="message"
      class="block mb-2 font-medium text-gray-900 dark:text-gray-400 mx-auto w-1/3 mt-4"
      ><span>Message</span>
      <textarea
        id="message"
        rows="4"
        class="leading-10 w-full block p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
        v-model="notification.message"
      ></textarea>
      <p class="text-red-700 font-light" v-if="errors.message">
        {{ errors.message }}
      </p>
    </label>
    <base-select
      label="Disable"
      class="w-1/3 mx-auto"
      v-model="notification.is_disabled"
      :messageError="errors.is_disabled"
      ><option
        v-for="(option, index) in OPTION_DISABLE_NOTIFICATION"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </base-select>
    <div class="flex w-1/3 mx-auto mt-4 justify-between">
      <base-input
        type="date"
        classLabel="w-64"
        v-model="notification.delivery_start_at"
        label="Start At"
        :messageError="errors.delivery_start_at"
      ></base-input>
      <base-input
        type="date"
        classLabel="w-64"
        v-model="notification.delivery_end_at"
        label="End At"
        :messageError="errors.delivery_end_at"
      ></base-input>
    </div>

    <base-button
      label="Create"
      @eventClick="storeNotification"
      class="mt-6 w-1/3 mx-auto block"
    ></base-button>
  </base-card>
</template>

<script>
import { ref } from "vue";
import Notification from "../../apis/notifications";
import BaseButton from "@/components/BaseButton.vue";
import BaseSelect from "@/components/BaseSelect";
import { OPTION_DISABLE_NOTIFICATION } from "../../constants/index";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
export default {
  components: {
    BaseButton,
    BaseSelect,
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const errors = ref({
      title: "",
      message: "",
      is_disabled: "",
      delivery_start_at: "",
      delivery_end_at: "",
    });
    const notification = ref({
      title: "",
      message: "",
      delivery_start_at: "",
      delivery_end_at: "",
      is_disabled: "",
    });

    async function storeNotification() {
      try {
        const { data } = await Notification.store(notification.value);
        toast.success("create notification success", {
          timeout: 2000,
        });
        router.push({ name: "notifications.index" });
        return data;
      } catch (err) {
        console.log(err);
        errors.value = err.response.data.errors;
      }
    }

    return {
      notification,
      OPTION_DISABLE_NOTIFICATION,
      storeNotification,
      errors,
    };
  },
};
</script>
