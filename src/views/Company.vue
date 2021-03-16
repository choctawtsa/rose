<template>
  <div>
    <header class="bg-center bg-cover company-background">
      <div
        class="flex flex-col justify-between min-h-screen pt-4 pb-8 sm:pt-6 xl:pb-10"
      >
        <navigation-menu />
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
    <site-footer />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
  name: "Company",
  components: {
    NavigationMenu,
    SiteFooter,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
