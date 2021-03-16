<template>
  <div>
    <header class="bg-center bg-cover company-background">
      <div
        class="flex flex-col justify-between min-h-screen pt-4 pb-8 sm:pt-6 xl:pb-10"
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
            <router-link class="text-gray-200 hover:text-white" to="/"
              >Home</router-link
            >
            <router-link class="text-gray-200 hover:text-white" to="/newsroom"
              >Newsroom</router-link
            >
            <router-link class="text-white" to="/company">Company</router-link>
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
          class="w-full max-w-md mx-auto px-4 pt-12 pb-12 sm:pt-16 sm:pb-10 lg:pb-12 xl:pt-24 xl:pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
        >
          <h1
            class="mx-auto text-4xl font-bold leading-tight text-white sm:text-5xl xl:max-w-6xl xl:text-6xl font-display text-center"
          >
            Our Company
          </h1>
          <div
            class="w-full mx-auto sm:w-auto sm:pt-0 xl:mt-12 mt-18 text-center"
          >
            <router-link
              :to="{ name: 'home', hash: '#faq' }"
              class="block px-4 py-2 font-medium text-gray-700 bg-white border-2 border-transparent rounded sm:inline-block lg:px-6 lg:py-3 xl:text-base hover:text-gray-900 hover:bg-gray-100 duration-100"
            >
              Have a question?
            </router-link>
            <router-link
              to="/about"
              class="block mt-2 px-4 py-2 font-medium text-white border-2 border-transparent rounded sm:inline-block sm:mt-0 sm:ml-4 lg:px-6 lg:py-3 xl:text-base hover:border-gray-400 duration-100"
            >
              About this website
            </router-link>
          </div>
        </div>
        <router-link :to="{ path: '/company', hash: '#mission' }">
          <svg
            class="h-10 mx-auto text-white lg:h-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </router-link>
      </div>
    </header>
    <main class="bg-gray-100">
      <section
        id="mission"
        class="mx-auto px-6 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl sm:grid sm:grid-cols-2 sm:gap-10"
      >
        <div class="sm:max-w-sm">
          <img
            class="object-cover w-full h-64 sm:h-auto"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000"
            alt="Men sitting in front of their laptops."
          />
        </div>
        <div class="mt-10 sm:mt-0 lg:max-w-lg lg:ml-0 xl:max-w-xl">
          <div class="sm:flex sm:flex-col sm:justify-center sm:h-full">
            <h2
              class="text-4xl font-bold text-gray-900 lg:text-5xl font-display"
            >
              Rose's Mission
            </h2>
            <div
              class="w-20 h-1 mt-8 mb-5 bg-gradient-to-r from-pink-500 to-orange-500"
            ></div>
            <p class="pt-2 text-gray-700 lg:text-lg">
              Moving the world online requires a lot of work to accomplish.
              Companies must innovate to deliver fast, secure, and intuitive
              products to their clients, and that's exactly the mission of Rose.
            </p>
            <p class="pt-2 text-gray-700 lg:text-lg">
              The coronavirus pandemic has encouraged us to expedite our work
              and shown us why our mission is so important. As the virus tests
              our society, we at Rose have the resolve to keep innovating and do
              our part to beat it.
            </p>
          </div>
        </div>
      </section>
      <section class="bg-white grid xs:grid-cols-12">
        <div
          class="pt-10 pb-16 pl-6 pr-12 xs:col-span-8 sm:col-span-6 lg:col-span-5"
        >
          <div class="max-w-sm ml-auto">
            <h2 class="my-2 text-4xl font-bold text-gray-900 font-display">
              Find us
            </h2>
            <div
              class="w-20 h-1 mt-6 mb-3 bg-gradient-to-r from-pink-500 to-orange-500"
            ></div>
            <div class="pt-8">
              <div>
                <p class="tracking-wide text-gray-600 uppercase">Main HQ</p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Oklahoma City, OK
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Western US Office
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Phoenix, AZ
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Eastern US Office
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Atlanta, GA
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  Canadian Office
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  Vancouver, BC
                </h3>
              </div>
              <div class="mt-12">
                <p class="tracking-wide text-gray-600 uppercase">
                  European Office
                </p>
                <h3 class="text-2xl font-semibold text-gray-800 font-display">
                  London, UK
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-64 min-w-full bg-center bg-cover xs:h-auto xs:col-span-4 sm:col-span-6 lg:col-span-7"
          style="
            background-image: url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500);
          "
        ></div>
      </section>
    </main>
    <footer class="bg-gray-100">
      <div>
        <div class="container mx-auto px-6 pt-5 pb-7 sm:px-10">
          <div class="md:flex md:items-center md:justify-between">
            <div>
              <img
                class="h-12 mx-auto mb-2 md:mx-0"
                src="/logo-gradient.svg"
                alt="Rose logo"
              /><span
                class="block mx-auto text-sm text-gray-500 md:inline md:mx-0 text-center md:text-left"
                >&copy; Rose Medical, Inc. All rights reserved.</span
              >
            </div>

            <nav
              class="mt-6 md:mt-0 space-x-4 text-center sm:space-x-8 md:space-x-10"
            >
              <router-link class="text-gray-500 hover:text-gray-700" to="/"
                >Home</router-link
              >
              <router-link
                class="text-gray-500 hover:text-gray-700"
                to="/newsroom"
                >Newsroom</router-link
              >
              <router-link
                class="text-gray-500 hover:text-gray-700"
                to="/company"
                >Company</router-link
              >
              <router-link class="text-gray-500 hover:text-gray-700" to="/about"
                >About</router-link
              >
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
