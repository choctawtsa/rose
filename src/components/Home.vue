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
  <div
    class="container mx-auto px-6 pt-12 pb-16 bg-white md:px-10 md:pt-16 md:pb-24 xl:pt-20 xl:pb-32"
  >
    <div class="text-center">
      <span
        class="text-lg font-semibold tracking-wider text-transparent uppercase md:text-xl xl:text-2xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
        >Built for digital</span
      >
      <h2
        class="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl xl:text-5xl font-display"
      >
        Medical treatment transformed
      </h2>
      <p
        class="max-w-5xl mx-auto mt-4 text-lg text-gray-500 md:text-xl xl:mt-6 xl:text-2xl"
      >
        It’s about time the medical world caught up with the rest of the digital
        world, and Rose makes that a reality.
      </p>
    </div>
    <div
      class="mt-14 overflow-hidden rounded-lg grid md:grid-cols-2 lg:grid-cols-3 gap-2px"
    >
      <div class="p-8 bg-gray-100 xl:p-10">
        <div
          class="w-10 h-10 p-2 text-white rounded shadow-md md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-orange-500"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-semibold text-gray-900">
          World-class security and privacy
        </h3>
        <p class="mt-8 text-base text-gray-700">
          Rose was built with security at the forefront of our design; rest
          assured that the only people with access to patient data are patients
          and their doctors.
        </p>
      </div>
      <div class="p-8 bg-gray-100 xl:p-10">
        <div
          class="w-10 h-10 p-2 text-white rounded shadow-md md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-orange-500"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-semibold text-gray-900">
          Manage appointments
        </h3>
        <p class="mt-8 text-base text-gray-700">
          Online appointment scheduling, automatic recurring appointments, and
          more are all just a few clicks away, reducing headaches for both
          patients and your institution’s staff.
        </p>
      </div>
      <div class="p-8 bg-gray-100 xl:p-10">
        <div
          class="w-10 h-10 p-2 text-white rounded shadow-md md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-orange-500"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-semibold text-gray-900">
          Conduct care online
        </h3>
        <p class="mt-8 text-base text-gray-700">
          Rose has built-in support for video conferencing, audio calls,
          messaging, and more, so you can care for patients during the pandemic
          without compromising their safety or the safety of your staff.
        </p>
      </div>
      <div class="p-8 bg-gray-100 xl:p-10">
        <div
          class="w-10 h-10 p-2 text-white rounded shadow-md md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-orange-500"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-semibold text-gray-900">
          Patients have access to their own data
        </h3>
        <p class="mt-8 text-base text-gray-700">
          With Rose, your patients will have easy, secure, and transparent
          access to all of their medical history, including ailments,
          medications, and more, at their fingertips.
        </p>
      </div>
      <div class="p-8 bg-gray-100 xl:p-10">
        <div
          class="w-10 h-10 p-2 text-white rounded shadow-md md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-orange-500"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
            />
            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-semibold text-gray-900">
          Easy onboarding
        </h3>
        <p class="mt-8 text-base text-gray-700">
          Bring in patient and staff data from dozens of existing supported
          platforms with little hassle. If your institution’s platform isn’t yet
          supported, we’ll help you come up with a migration plan.
        </p>
      </div>
      <div class="p-8 bg-gray-100 xl:p-10">
        <div
          class="w-10 h-10 p-2 text-white rounded shadow-md md:w-12 md:h-12 bg-gradient-to-tr from-pink-500 to-orange-500"
        >
          <svg
            class="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="mt-6 text-xl font-semibold text-gray-900">
          Completely customizable
        </h3>
        <p class="mt-8 text-base text-gray-700">
          Control everything in your institution’s deployment. You can disable
          or enable nearly every feature to fit the needs of your institution,
          like disabling virtual care if that’s not a service you provide.
        </p>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col-reverse items-center mx-auto pb-32 lg:flex-row lg:pl-16 lg:pr-10 xl:items-stretch 2xl:container"
  >
    <div class="relative mt-16 sm:max-w-sm lg:mt-0">
      <div class="absolute inset-0 bg-white shadow-2xl sm:rounded-2xl"></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 transform -skew-y-8 sm:skew-y-0 sm:-rotate-10 sm:rounded-2xl"
      ></div>
      <div
        class="relative flex flex-col justify-center w-screen h-full px-9 pt-20 pb-16 bg-white sm:w-auto sm:rounded-2xl text-center"
      >
        <div>
          <span class="font-semibold tracking-wide text-gray-700 uppercase"
            >No higher than</span
          >
          <div class="flex items-center justify-center mt-3">
            <span class="font-bold text-gray-900 font-display text-7xl"
              >$11</span
            >
            <span class="ml-3 font-semibold text-gray-500">per user/month</span>
          </div>
          <div class="w-48 mx-auto my-12 bg-gray-200 h-2px"></div>
          <button
            class="flex justify-center w-full max-w-xs mx-auto mb-4 px-4 py-4 bg-gray-900 rounded-lg hover:bg-gray-800 sm:w-72"
          >
            <span class="text-gray-400">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                /></svg
            ></span>
            <span class="ml-2 text-white">Calculate my price</span>
          </button>
          <span class="text-sm text-gray-500"
            >This should only take a few minutes.</span
          >
        </div>
      </div>
    </div>
    <div
      class="flex-1 px-6 border-gray-200 sm:px-10 lg:pl-16 lg:pr-0 xl:ml-16 xl:p-12 xl:border-3 rounded-2xl 2xl:ml-28"
    >
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl font-display">
        Transparent pricing
      </h2>
      <p class="mt-4 text-gray-500">
        Our pricing is simple and easy. When customized with all features
        enabled, Rose costs the listed price. As you disable features, however,
        the cost of your plan will go down.
      </p>
      <p class="mt-6 mb-10 text-gray-500">
        Additionally, the price you see at checkout is the price you’ll be
        billed, no surprise fees added.
      </p>
      <span
        class="text-sm font-semibold tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
        >What's included for all plans</span
      >
      <div class="mt-10 grid sm:grid-cols-2 gap-x-4 gap-y-10">
        <div class="flex items-center">
          <div class="text-green-500">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-4 text-gray-700">World-class security and privacy</p>
        </div>
        <div class="flex items-center">
          <div class="text-green-500">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-4 text-gray-700">24/7 support availability</p>
        </div>
        <div class="flex items-center">
          <div class="text-green-500">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-4 text-gray-700">
            99.98% uptime and amazing reliability
          </p>
        </div>
        <div class="flex items-center">
          <div class="text-green-500">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="ml-4 text-gray-700">Access to training materials</p>
        </div>
      </div>
    </div>
  </div>
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
