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
            v-model="nameSearch"
            @input="getMembers(1)"
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
        label="Create User"
        linkButton="users.create"
      ></base-button>
    </div>

    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      v-if="members"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">Name Kana</th>
          <th scope="col" class="py-3 px-6">Birthday</th>
          <th scope="col" class="py-3 px-6">Gender</th>
          <th scope="col" class="py-3 px-6"></th>
        </tr>
      </thead>
      <tbody v-if="!error">
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(member, index) in members.data"
          :key="index"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ member.family_name + member.first_name }}
          </th>
          <td class="py-4 px-6">
            {{ member.first_name_kana + member.first_name_kana }}
          </td>
          <td class="py-4 px-6">{{ member.birthday }}</td>
          <td class="py-4 px-6">{{ GENDER[member.gender] }}</td>
          <td>
            <router-link
              :to="{ name: 'users.show', params: { id: member.user_id } }"
              class="text-[18px] p-3"
              ><font-awesome-icon icon="fa-regular fa-eye"
            /></router-link>
          </td>
        </tr>
      </tbody>
      <p v-else>{{ error }}</p>
    </table>
  </div>
  <pagination
    v-if="!error"
    :current="payload.page"
    :total="members.total"
    :per-page="payload.page_size"
    @page-changed="getMembers($event)"
  />
</template>

<script>
import Members from "../apis/members";
import { reactive, ref } from "vue";
import { GENDER } from "../constants/index";
import Pagination from "@ocrv/vue-tailwind-pagination";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    Pagination,
    BaseButton,
  },
  async setup() {
    const members = ref([]);
    const payload = reactive({
      page: 1,
      page_size: 10,
    });
    const nameSearch = ref("");
    const error = ref(null);
    async function getMembers(page = 1) {
      try {
        error.value = null;
        if (nameSearch.value.length > 0) {
          const result = await Members.getAll({
            page: page,
            page_size: 10,
            name: nameSearch.value,
          });
          members.value = result.data;
        } else {
          const result = await Members.getAll({
            page: page,
            page_size: 10,
          });
          members.value = result.data;
        }
      } catch (err) {
        error.value = err.response.data.message;
      }

      payload.page = page;
    }
    await getMembers();

    async function searchByName() {}
    return {
      members,
      GENDER,
      payload,
      getMembers,
      searchByName,
      nameSearch,
      error,
    };
  },
};
</script>
