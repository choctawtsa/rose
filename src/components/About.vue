<template>
  <div>
    <header class="pt-4 bg-center bg-cover sm:pt-6 about-background">
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
          <router-link class="text-gray-200 hover:text-white" to="/company"
            >Company</router-link
          >
          <router-link class="text-white" to="/about">About</router-link>
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
      <div class="container mx-auto px-4 pt-3 sm:pt-2">
        <div class="pt-12 pb-12 sm:pt-20 sm:pb-30">
          <h1
            class="text-5xl font-bold leading-none text-white sm:text-7xl text-left font-display"
          >
            About
          </h1>
          <div class="pt-12 sm:pt-8">
            <a
              href="/docs/LEAP-Report.pdf"
              class="block py-2 font-medium text-gray-900 bg-white border-2 border-transparent rounded sm:inline-block sm:px-4 lg:px-6 lg:py-3 lg:text-base hover:bg-gray-200 text-center duration-100"
            >
              Plan of Work Log
            </a>
            <a
              href="/docs/Student-Copyright-Checklist.pdf"
              class="block mt-2 py-2 font-medium text-white border-2 border-transparent rounded sm:inline-block sm:mt-0 sm:ml-4 sm:px-4 lg:px-6 lg:py-3 lg:text-base hover:border-gray-500 text-center duration-100"
            >
              Copyright Checklist
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="container relative mx-auto px-6 py-10 bg-white">
      <p class="pb-4 text-sm text-gray-600">
        Note: This website has been built completely by our team and is not
        using any templates of any kind, as per section D of the Preliminary
        Round Regulations for Webmaster specified in the
        <span class="italic">
          TSA High School Virtual Competitive Events Guide for the 2021 National
          TSA Conference.
        </span>
        Additionally, all items listed here are licensed under the
        <a href="https://opensource.org/licenses/MIT" class="text-blue-500">
          MIT License
        </a>
        unless otherwise noted.
      </p>
      <div
        class="pt-6 pb-6 border-t-2 border-gray-200 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
      >
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-gray-800">Styling</h3>
        </div>
        <div class="mt-4 sm:mt-0 col-span-5">
          <div>
            <p class="font-semibold text-gray-600 uppercase">Tailwind CSS</p>
            <p class="mt-2 text-gray-700">
              Tailwind CSS is a utility framework that makes developing much
              easier. Instead of having to check Bootstrap's docs, find a
              component that fits your needs well enough, and then having to
              fight with Bootstrap's predetermined styles to customize the
              component, we chose Tailwind. Tailwind allows you to create
              everything yourself, without having to write any CSS (well, you
              can write CSS if you really need to, but those occasions are few
              and far between). It's difficult to explain exactly what Tailwind
              offers through a write-up like this, so we'd recommend checking it
              out at
              <a class="text-blue-500" href="https://tailwindcss.com">
                tailwindcss.com;
              </a>
              or, you can check out its
              <a
                class="text-blue-500"
                href="https://github.com/tailwindcss/tailwindcss"
              >
                GitHub repository.
              </a>
            </p>
          </div>
          <div class="mt-6 grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <p class="font-semibold text-gray-600 uppercase">
                Tailwind CSS Forms
              </p>
              <p class="mt-2 text-gray-700">
                Forms and form elements aren't terribly easy to work with.
                Because of this, we've used a plugin for Tailwind CSS to make
                them easier to work with. Things like our newsletter sign up on
                the Home page and the price calculator were both built with
                Tailwind CSS Forms.
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">Autoprefixer</p>
              <p class="mt-2 text-gray-700">
                Tailwind doesn't include vendor prefixes on CSS properties by
                default to lower the size of the CDN build. However, we've
                decided to use a tool called Autoprefixer that goes through and
                adds vendor prefixes to our CSS for better cross-browser
                compatability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-6 pb-6 border-t-2 border-gray-200 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
      >
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-gray-800">Function</h3>
        </div>
        <div class="mt-4 sm:mt-0 col-span-5">
          <div>
            <p class="font-semibold text-gray-600 uppercase">Vue.js</p>
            <p class="mt-2 text-gray-700">
              Our website was built with the front-end JavaScript framework
              <a class="text-blue-500" href="https://vuejs.org"> Vue.js. </a>
              The decision to use Vue was really just to get used to
              technologies that are actually used in the industry. While we did
              use Vue to build our site and got some good use out of it, we
              definitely didn't use it to its full potential, as most of the
              site could've been built using simpler technologies. Our price
              calculator, however, did justify using Vue some.
            </p>
          </div>
          <div class="mt-6 grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <p class="font-semibold text-gray-600 uppercase">Vue Router</p>
              <p class="mt-2 text-gray-700">
                Vue tooling to allow for navigation between pages in single-page
                applications (like this site).
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">Vite</p>
              <p class="mt-2 text-gray-700">
                A first-party development environment for Vue with support for
                live servers, single-file components, etc..
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-6 pb-6 border-t-2 border-gray-200 sm:grid sm:grid-cols-7 sm:gap-6 md:gap-0"
      >
        <div class="col-span-2">
          <h3 class="text-2xl font-bold text-gray-800">Graphics</h3>
        </div>
        <div class="mt-4 sm:mt-0 col-span-5">
          <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div class="lg:col-span-2">
              <p class="font-semibold text-gray-600 uppercase">Unsplash</p>
              <p class="mt-2 text-gray-700">
                All images on this site are free images from
                <a class="text-blue-500" href="https://unsplash.com">
                  Unsplash.
                </a>
                Unsplash has a very permissive
                <a class="text-blue-500" href="https://unsplash.com/license">
                  license
                </a>
                that grants users an "irrevocable, nonexclusive, worldwide
                copyright license to download, copy, modify, distribute,
                perform, and use photos from Unsplash for free, including for
                commercial purposes, without permission from or attributing the
                photographer or Unsplash." The service's huge stock of
                high-quality photos makes it a hugely useful tool for our team.
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">Heroicons</p>
              <p class="mt-2 text-gray-700">
                Heroicons is a very versatile and useful SVG icon set
                specifically for UI design. The set was designed by the makers
                of Tailwind CSS, and fits in perfectly with our design style.
              </p>
            </div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
