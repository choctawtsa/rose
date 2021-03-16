<template>
  <header
    class="relative pt-4 pb-16 bg-center bg-cover sm:pt-6 md:pb-24 lg:pb-32 hero-background"
  >
    <navigation-menu />
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
            <div class="h-px mx-auto my-6 bg-gray-200 lg:my-9 w-60"></div>
            <button
              class="w-full py-3 bg-gray-900 rounded shadow-lg hover:bg-gray-800"
              type="submit"
            >
              <span class="font-medium text-white">Sign me up</span>
            </button>
          </form>
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
    class="flex flex-col-reverse items-center mx-auto sm:pb-32 lg:flex-row lg:pl-16 lg:pr-10 xl:items-stretch 2xl:container"
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
          <div class="w-48 mx-auto mt-10 mb-12 bg-gray-200 h-2px"></div>
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
            <span class="ml-2 font-medium text-white">Calculate my price</span>
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
  <div class="w-full pt-16 bg-gray-800 md:pb-20 lg:pt-20 lg:pb-24">
    <div class="container mx-auto lg:px-10">
      <div class="px-6 md:px-10 lg:px-0">
        <h2
          class="text-4xl font-bold text-white lg:text-5xl text-center font-display"
        >
          Always online, so you can be too
        </h2>
        <p
          class="mx-auto mt-6 text-xl text-gray-400 lg:text-2xl max-w-7xl text-center"
        >
          Never worry about tech getting in the way of care. Rose’s
          industry-leading reliability and uptime means you’ll always be able to
          provide the care your patients require.
        </p>
      </div>
      <div
        class="mt-10 overflow-hidden lg:rounded-lg grid md:grid-cols-3 gap-2px"
      >
        <div
          class="flex flex-col items-center justify-center py-9 bg-gray-900 text-center"
        >
          <span class="text-6xl font-bold text-white font-display lg:text-7xl"
            >99.98%</span
          >
          <span class="text-2xl font-medium text-gray-500 lg:text-3xl"
            >Uptime</span
          >
        </div>
        <div
          class="flex flex-col items-center justify-center py-9 bg-gray-900 text-center"
        >
          <span class="text-6xl font-bold text-white font-display lg:text-7xl"
            >24/7</span
          >
          <span class="text-2xl font-medium text-gray-500 lg:text-3xl"
            >Support availability</span
          >
        </div>
        <div
          class="flex flex-col items-center justify-center py-9 bg-gray-900 text-center"
        >
          <span class="text-6xl font-bold text-white font-display lg:text-7xl"
            >A+</span
          >
          <span class="text-2xl font-medium text-gray-500 lg:text-3xl"
            >Privacy &amp; security</span
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="container mx-auto px-6 pt-20 pb-24 sm:px-10 lg:grid lg:grid-cols-5 lg:gap-x-20"
    id="faq"
  >
    <div class="lg:col-span-2">
      <h2 class="text-4xl font-bold text-gray-900 font-display">
        Frequently asked questions
      </h2>
      <p class="mt-5 text-lg text-gray-500">
        If you can't find what you're looking for, be sure to
        <br class="hidden sm:block" />
        <a
          class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
          href="mailto:hello@choctawtsa.org"
          >contact us.</a
        >
      </p>
    </div>
    <div class="mt-12 lg:mt-0 lg:col-span-3">
      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          What types of institutions can purchase Rose?
        </h3>
        <p class="mt-5 text-gray-700">
          Rose is available to nearly all medical institutions. Hospital
          systems, individual hospitals, local clinics, emergency care clinics,
          and more are all eligible to purchase Rose. Contact us with more
          specific inquiries.
        </p>
      </div>
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-900">
          Where is Rose available?
        </h3>
        <p class="mt-5 text-gray-700">
          Rose is available in the United States, Canada, the European Union,
          the United Kingdom, Australia, and New Zealand, with plans to bring
          Rose to dozens more countries in the near future.
        </p>
      </div>
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-900">
          Are there resources available to train staff?
        </h3>
        <p class="mt-5 text-gray-700">
          There are many resources available to customers and potential
          customers. We understand that you need to see Rose in action before
          you decide to purchase it for your institution, so we host regular
          hands-on showcases that you can attend. Additionally, hundreds of
          training videos are available upon purchase to get your staff up to
          speed.
        </p>
      </div>
      <div class="mt-12">
        <h3 class="text-xl font-semibold text-gray-900">
          How secure and private is Rose?
        </h3>
        <p class="mt-5 text-gray-700">
          Extremely. Every part of Rose was designed around privacy and
          security. For example, patient data is securely encrypted on our
          servers, and it cannot be accessed by anyone but the patient, the
          patient’s doctor, and anyone else the patient explicitly allows.
        </p>
      </div>
    </div>
  </div>
  <site-footer />
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
  name: "Home",
  components: {
    NavigationMenu,
    SiteFooter,
  },
};
</script>

<style lang="css" scoped></style>
