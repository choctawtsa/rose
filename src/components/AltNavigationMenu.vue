<template>
  <header class="relative py-4 bg-white shadow sm:py-6">
    <div
      class="flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-36"
    >
      <div class="flex-1 w-0 sm:-mt-2">
        <router-link to="/">
          <img class="h-10 lg:h-14" src="/logo-gradient.svg" alt="Rose logo" />
        </router-link>
      </div>

      <nav class="hidden text-sm text-gray-600 md:flex lg:text-base space-x-10">
        <router-link
          class="hover:text-gray-800"
          exact-active-class="text-gray-800"
          to="/"
          >Home</router-link
        >
        <router-link
          class="hover:text-gray-800"
          active-class="text-gray-800"
          to="/newsroom"
          >Newsroom</router-link
        >
        <router-link
          class="hover:text-gray-800"
          exact-active-class="text-gray-800"
          to="/company"
          >Company</router-link
        >
        <router-link
          class="hover:text-gray-800"
          exact-active-class="text-gray-800"
          to="/about"
          >About</router-link
        >
      </nav>
      <div class="justify-end flex-1 hidden w-0 md:flex">
        <a
          href="mailto:hello@choctawtsa.org"
          class="px-4 py-2 font-medium bg-gray-900 rounded lg:px-6 lg:py-3 hover:bg-gray-800"
        >
          <span class="text-sm text-white lg:text-base">Contact us</span>
        </a>
      </div>
      <div class="relative">
        <button
          @click="menuOpen = !menuOpen"
          class="block text-gray-500 md:hidden hover:text-gray-800"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-show="!menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h16M4 16h16"
            />
            <path
              v-show="menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition name="menu">
      <div
        v-if="menuOpen"
        class="absolute inset-x-0 top-0 z-10 p-2 md:hidden transition transform origin-top-right"
      >
        <div
          class="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="w-auto h-8"
                  src="/logo-gradient.svg"
                  alt="Rose logo"
                />
              </div>
              <div class="-mr-2">
                <button
                  @click="menuOpen = !menuOpen"
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link
                  to="/"
                  class="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Home
                  </span>
                </router-link>

                <router-link
                  to="/newsroom"
                  class="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Newsroom
                  </span>
                </router-link>

                <router-link
                  to="/company"
                  class="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Company
                  </span>
                </router-link>

                <router-link
                  to="/about"
                  class="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    About
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6 space-y-6">
            <div>
              <a
                href="mailto:hello@choctawtsa.org"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent hover:shadow bg-gradient-to-r from-pink-500 to-orange-500 rounded-md shadow-sm"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
