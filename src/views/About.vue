<template>
  <div>
    <header class="pt-4 bg-center bg-cover sm:pt-6 about-background">
      <navigation-menu />
      <div class="container mx-auto px-4 pt-3 sm:pt-2">
        <div class="pt-12 pb-12 sm:pt-20 sm:pb-30">
          <h1
            class="text-5xl font-bold leading-none text-white sm:text-6xl xl:text-7xl text-left font-display"
          >
            About
          </h1>
          <div class="pt-12 sm:pt-8">
            <a
              href="/documents/plan-of-work-log.pdf"
              class="block py-2 font-medium text-gray-900 bg-white border-2 border-transparent rounded sm:inline-block sm:px-4 lg:px-6 lg:py-3 lg:text-base hover:bg-gray-200 text-center duration-100"
            >
              Plan of Work Log
            </a>
            <a
              href="/documents/student-copyright-checklist.pdf"
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
        using any templates of any kind, as per section G of the Preliminary
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
              site could've been built using simpler technologies. Extracting
              the header and footer into reusable components did make life
              easier, though.
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
          <div>
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
              copyright license to download, copy, modify, distribute, perform,
              and use photos from Unsplash for free, including for commercial
              purposes, without permission from or attributing the photographer
              or Unsplash." The service's huge stock of high-quality photos
              makes it a hugely useful tool for our team.
            </p>
          </div>
          <div class="mt-6 grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <p class="font-semibold text-gray-600 uppercase">Heroicons</p>
              <p class="mt-2 text-gray-700">
                Heroicons is a very versatile and useful SVG icon set
                specifically for UI design. The set was designed by the makers
                of Tailwind CSS, and fits in perfectly with our design style.
              </p>
            </div>
            <div>
              <p class="font-semibold text-gray-600 uppercase">Rose Logo</p>
              <p class="mt-2 text-gray-700">
                The Rose logo was designed from scratch entirely by a team
                member.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <site-footer />
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
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
