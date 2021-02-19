<template>
  <header
    class="relative pt-4 pb-16 bg-center bg-cover sm:pt-6 md:pb-24 lg:pb-32 hero-background"
  >
    <div
      class="flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-36"
    >
      <div class="flex-1 w-0">
        <router-link to="/">
          <img class="h-10 lg:h-14" src="/logo-white.svg" alt="Rose logo" />
        </router-link>
      </div>

      <nav class="hidden text-sm md:flex lg:text-base space-x-10">
        <router-link class="text-white" to="/">Home</router-link>
        <router-link class="text-gray-200 hover:text-white" to="/newsroom"
          >Newsroom</router-link
        >
        <router-link class="text-gray-200 hover:text-white" to="/company"
          >Company</router-link
        >
        <router-link class="text-gray-200 hover:text-white" to="/about"
          >About</router-link
        >
      </nav>
      <div class="justify-end flex-1 hidden w-0 md:flex">
        <button
          class="px-4 py-2 font-medium bg-white rounded lg:px-6 lg:py-3 hover:bg-gray-100"
        >
          <span
            class="text-sm text-transparent lg:text-base bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
            >Get my price</span
          >
        </button>
      </div>
      <div class="relative">
        <button
          @click="menuOpen = !menuOpen"
          class="block text-gray-200 md:hidden hover:text-white"
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
              <router-link
                to="/"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent hover:shadow bg-gradient-to-r from-pink-500 to-orange-500 rounded-md shadow-sm"
              >
                Get my price
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="items-center justify-between mx-auto mt-16 px-6 sm:px-12 md:flex md:mt-20 md:px-8 lg:px-16 xl:px-20 2xl:px-0 2xl:max-w-8xl lg:mt-28"
    >
      <div>
        <h1
          class="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-4xl lg:max-w-lg lg:text-5xl lg:leading-tight xl:max-w-2xl xl:text-6xl xl:leading-snug 2xl:max-w-4xl 2xl:leading-tight 2xl:text-7xl font-display"
        >
          A medical platform for the digital age
        </h1>
        <p
          class="mt-4 text-white sm:text-lg md:text-base lg:max-w-xl lg:pr-4 lg:text-xl xl:max-w-xl xl:pr-0 xl:text-lg 2xl:max-w-3xl 2xl:mt-8 2xl:text-2xl opacity-80"
        >
          Meet the easiest way to manage patients, conduct virtual visits, and
          give patients easy and instant access to all of their data.
        </p>
      </div>
      <div
        class="mt-10 bg-white rounded-lg md:max-w-xs md:mt-0 md:ml-4 lg:ml-0 xl:max-w-sm"
      >
        <div class="px-6 py-5 lg:px-9 lg:py-7">
          <span class="font-semibold text-gray-900"
            >Subscribe to our newsletter</span
          >
          <form>
            <input
              type="text"
              class="w-full mt-2 px-2 border border-gray-200 shadow-sm h-11 rounded-md"
              placeholder="Name"
            />
            <input
              type="email"
              class="w-full mt-4 px-2 border border-gray-200 shadow-sm h-11 rounded-md"
              placeholder="Email address"
            />
          </form>
          <div class="h-px mx-auto my-6 bg-gray-200 lg:my-9 w-60"></div>
          <button
            class="w-full py-3 bg-white rounded shadow-lg hover:bg-gray-100"
          >
            <span
              class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
              >Sign me up</span
            >
          </button>
        </div>
        <div
          class="px-6 py-5 bg-gray-100 border-t-2 border-gray-200 rounded-b-lg lg:px-9 lg:py-6"
        >
          <p class="text-xs text-gray-500">
            By signing up, you are agreeing to our
            <router-link
              to="/privacy-policy"
              class="font-semibold text-gray-600"
              >Privacy Policy</router-link
            >
            and consent to receiving marketing emails.
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style lang="css" scoped>
.hero-background {
  background-image: linear-gradient(
      45deg,
      rgba(236, 72, 153, 1) 0%,
      rgba(249, 115, 22, 1) 100%
    ),
    url("/home-hero-background.png");
  background-blend-mode: overlay;
}

.menu-enter-active {
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.menu-leave-active {
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
  /* scale: 0.5; */
}

.menu-enter-to,
.menu-leave {
  opacity: 1;
  /* scale: 1; */
}
</style>
