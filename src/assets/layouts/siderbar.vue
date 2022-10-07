<template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded h-full">
      <a href="/" class="flex items-center px-2">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-14"
          alt="Flowbite Logo"
        />
        <span class="self-center text-3xl font-semibold whitespace-nowrap"
          >IMoney</span
        >
      </a>
      <ul class="space-y-2 mt-12">
        <li>
          <router-link
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            :to="{ name: 'Home' }"
            ><svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            :to="{ name: 'notifications.index' }"
            ><svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Notifications</span>
          </router-link>
        </li>
        <li>
          <router-link
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            :to="{ name: 'users.index' }"
            ><svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-3">Users</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
