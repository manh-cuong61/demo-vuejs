<template>
  <base-card>
    <base-input
      classLabel="w-1/3 mx-auto"
      v-model="notification.title"
      label="Title"
      idInput="title"
      :disabled="disabled == true"
      :messageError="errors.title"
    ></base-input>
    <label
      for="message"
      class="block mb-2 font-medium text-gray-900 dark:text-gray-400 mx-auto w-1/3 mt-4"
      ><span>Message</span>
      <textarea
        id="message"
        rows="4"
        class="leading-10 w-full block p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
        :disabled="disabled == true"
        v-model="notification.message"
      ></textarea>
      <p class="text-red-700 font-light" v-if="errors.message">
        {{ errors.message }}
      </p>
    </label>
    <base-select
      label="Disable"
      class="w-1/3 mx-auto"
      :disabled="disabled == true"
      v-model="notification.is_disabled"
      :messageError="errors.is_disabled"
      ><option
        v-for="(option, index) in OPTION_DISABLE_NOTIFICATION"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option></base-select
    >
    <div class="flex w-1/3 mx-auto mt-4 justify-between">
      <base-input
        type="date"
        classLabel="w-64"
        v-model="notification.delivery_start_at"
        label="Start At"
        :disabled="disabled == true"
        :messageError="errors.delivery_start_at"
      ></base-input>
      <base-input
        type="date"
        classLabel="w-64"
        v-model="notification.delivery_end_at"
        label="End At"
        :disabled="disabled == true"
        :messageError="errors.delivery_end_at"
      ></base-input>
    </div>
    <base-button
      label="Edit"
      @eventClick="disabled = false"
      class="mt-6 w-1/3 mx-auto block"
      v-if="disabled"
    ></base-button>
    <base-button
      label="update"
      @eventClick="updateNotificaton"
      class="mt-6 w-1/3 mx-auto block"
      v-else
    ></base-button>
  </base-card>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Notification from "../../apis/notifications";
import BaseButton from "@/components/BaseButton.vue";
import BaseSelect from "@/components/BaseSelect";
import { useToast } from "vue-toastification";
import { OPTION_DISABLE_NOTIFICATION } from "../../constants/index";
// import axios from "axios";
export default {
  components: {
    BaseButton,
    BaseSelect,
  },
  async setup() {
    const toast = useToast();
    const disabled = ref(true);
    const router = useRoute();
    const notification = ref({
      notification_id: router.params.id,
      title: "",
      message: "",
      delivery_start_at: "",
      delivery_end_at: "",
      is_disabled: 0,
    });
    const errors = ref({
      title: "",
      message: "",
      is_disabled: "",
      delivery_start_at: "",
      delivery_end_at: "",
    });

    Notification.getDetail(router.params.id)
      .then((res) => {
        notification.value = res.data;
      })
      .catch((err) => console.log(err));

    async function updateNotificaton() {
      try {
        const { data } = await Notification.update(notification.value);
        toast.success("update notification success", {
          timeout: 2000,
        });
        disabled.value = true;
        return data;
      } catch (err) {
        errors.value = err.response.data.errors;
        console.log(err);
      }
    }
    // const taoBao = await axios.get(
    //   "https://s.taobao.com/search?q=iphone5&type=p&tmhkh5=&from=sea_1_searchbutton&catId=100&spm=a2141.241046-.searchbar.d_2_searchbox"
    // );
    // console.log(taoBao);

    const xhr = new XMLHttpRequest();
    var url =
      "https://s.taobao.com/search?initiative_id=staobaoz_20221007&q=iphone+14&suggest=0_1&_input_charset=utf-8&wq=iphone&suggest_query=iphone&source=suggest";
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          console.log(xhr.responseType);
          console.log("cuong");
        } else {
          console.log("error");
          console.log(xhr.responseType);
        }
      }
    };
    xhr.open("GET", url, true);
    console.log(xhr.responseText);
    xhr.send();
    return {
      notification,
      disabled,
      updateNotificaton,
      OPTION_DISABLE_NOTIFICATION,
      errors,
    };
  },
};
</script>
