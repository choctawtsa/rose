<template>
  <header class="pt-4 bg-center bg-cover sm:pt-6 newsroom-background">
    <navigation-menu />
    <div class="container mx-auto px-4 pt-3 sm:pt-2">
      <div class="pt-12 pb-12 sm:pt-20 sm:pb-30">
        <h1
          class="text-5xl font-bold leading-none text-white sm:text-6xl xl:text-7xl text-left font-display"
        >
          Newsroom
        </h1>
        <p
          class="mt-6 text-white sm:text-lg md:text-base lg:max-w-xl lg:pr-4 lg:text-xl xl:max-w-xl xl:pr-0 xl:text-lg 2xl:max-w-3xl 2xl:mt-8 2xl:text-2xl opacity-80"
        >
          Keep up with the latest from Rose, like our product advancements,
          market news, and more.
        </p>
      </div>
    </div>
  </header>
  <site-footer />
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
  components: {
    NavigationMenu,
    SiteFooter,
  },
};
</script>
