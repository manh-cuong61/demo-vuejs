<template>
  <div class="overflow-x-auto relative">
    <div class="flex justify-between items-center">
      <form class="mt-8 mb-4 w-1/3">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >Search</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            v-model="titleSearch"
            @input="getnotificaitons(1)"
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search By Name..."
            required
          />
        </div>
      </form>
      <base-button
        class="max-h-14 mr-5"
        label="Add Notification"
        linkButton="notifications.create"
      ></base-button>
    </div>

    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      v-if="notificaitons"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Title</th>
          <th scope="col" class="py-3 px-6">Message</th>
          <th scope="col" class="py-3 px-6">Start At</th>
          <th scope="col" class="py-3 px-6">End At</th>
          <th scope="col" class="py-3 px-6">&nbsp;&nbsp;</th>
          <th scope="col" class="py-3 px-6 w-16"></th>
        </tr>
      </thead>
      <tbody v-if="!error">
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(notification, index) in notificaitons.data"
          :key="index"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ notification.title }}
          </th>
          <td class="py-4 px-6">
            {{ notification.message }}
          </td>
          <td class="py-4 px-6">{{ notification.delivery_start_at }}</td>
          <td class="py-4 px-6">{{ notification.delivery_end_at }}</td>
          <td>
            <router-link
              :to="{
                name: 'notifications.show',
                params: { id: notification.notification_id },
              }"
              class="text-[18px] p-3"
              ><font-awesome-icon icon="fa-regular fa-eye"
            /></router-link>
          </td>
          <td>
            <input
              @click="showModal(), (notiDelete = notification.notification_id)"
              type="button"
              class="cursor-pointer p-3 font-medium text-[17px] text-red-600"
              value="X"
            />
          </td>
        </tr>
      </tbody>
      <p v-else>{{ error }}</p>
    </table>
  </div>
  <pagination
    v-if="!error"
    :current="payload.page"
    :total="notificaitons.total"
    :per-page="payload.page_size"
    @page-changed="getnotificaitons($event)"
  />
  <Modal v-model="isShow" :close="closeModal">
    <div
      v-if="isShow"
      id="popup-modal"
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto m-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            @click="closeModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <svg
              aria-hidden="true"
              class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Are you sure you want to delete this product?
            </h3>
            <button
              @click="deleteNotification($event)"
              data-modal-toggle="popup-modal"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              @click="closeModal"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Notifications from "../../apis/notifications";
import { reactive, ref } from "vue";
import Pagination from "@ocrv/vue-tailwind-pagination";
import BaseButton from "@/components/BaseButton.vue";
import { useToast } from "vue-toastification";

export default {
  components: {
    Pagination,
    BaseButton,
  },
  async setup() {
    const toast = useToast();
    const notificaitons = ref([]);
    const payload = reactive({
      page: 1,
      page_size: 10,
    });
    const titleSearch = ref("");
    const error = ref(null);
    const isShow = ref(false);
    const notiDelete = ref(null);

    async function getnotificaitons(page = 1) {
      try {
        error.value = null;
        if (titleSearch.value.length > 0) {
          const { data } = await Notifications.getAll({
            page: page,
            page_size: 10,
            title: titleSearch.value,
          });
          notificaitons.value = data;
        } else {
          const { data } = await Notifications.getAll({
            page: page,
            page_size: 10,
          });
          notificaitons.value = data;
        }
      } catch (err) {
        error.value = err.response.data.message;
      }

      payload.page = page;
    }
    await getnotificaitons();

    async function deleteNotification() {
      const { data } = await Notifications.delete(notiDelete.value);
      await getnotificaitons();
      isShow.value = false;
      toast.success("create notification success", {
        timeout: 2000,
      });
      return data;
    }

    function showModal() {
      isShow.value = true;
    }

    function closeModal() {
      isShow.value = false;
    }

    return {
      notificaitons,
      payload,
      getnotificaitons,
      titleSearch,
      error,
      deleteNotification,
      showModal,
      closeModal,
      isShow,
      notiDelete,
    };
  },
};
</script>
