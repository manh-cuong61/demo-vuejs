<template>
  <header class="border-solid border-b-2">
    <nav class="bg-white border-gray-200 px-4 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <div class="flex items-center lg:order-2">
          <a
            @click="$emit('onLogout')"
            class="text-gray-800 hover:bg-gray-50 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:text-blue-700 cursor-pointer"
            >Log Out</a
          >
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 lg:p-0 hover:text-blue-700"
                aria-current="page"
                >Home</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
