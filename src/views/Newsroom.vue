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
  <main
    class="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-6"
  >
    <router-link to="/newsroom/rose-launches-in-canada">
      <article class="md:flex py-10 items-center">
        <img
          class="h-42 w-42 hidden md:block rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=192&h=192"
          alt=""
        />
        <div class="md:ml-10">
          <span class="text-gray-600 uppercase font-medium"
            >December 8, 2020</span
          >
          <h2 class="mt-2 font-display font-semibold text-gray-900 text-2xl">
            Rose launches in Canada
          </h2>
          <p class="mt-4 text-gray-500">
            Today, we're proud to announce that Rose is officially launching in
            Canada. This comes at a time when a product like Rose is so
            desperately needed globally. The COVID-19 pandemic has upended the
            way we go about our everyday lives. More and more, the world moves
            online, and with Rose, Canadian medical institutions...
          </p>
        </div>
      </article></router-link
    >
    <router-link to="/newsroom/amanda-taylor-joins-rose-board-of-directors">
      <article class="md:flex py-10 border-t-2 border-gray-200 items-center">
        <img
          class="h-42 w-42 hidden md:block rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=192&h=192"
          alt=""
        />
        <div class="md:ml-10">
          <span class="text-gray-600 uppercase font-medium"
            >November 2, 2020</span
          >
          <h2 class="mt-2 font-display font-semibold text-gray-900 text-2xl">
            Amanda Taylor joins Rose's board of directors
          </h2>
          <p class="mt-4 text-gray-500">
            Rose today announced that Dr. Amanda Taylor, Medtronic CEO and
            former Secretary of the United States Department of Health and Human
            Services (HHS), has been elected to Rose's board of directors. Dr.
            Taylor is a giant in the medical field. Nominated to be the
            Secretary of HHS in 1993, Dr. Taylor guided medical...
          </p>
        </div>
      </article></router-link
    >
    <router-link to="/newsroom/rose-commits-to-be-carbon-neutral-by-2022">
      <article class="md:flex py-10 border-t-2 border-gray-200 items-center">
        <img
          class="h-42 w-42 hidden md:block rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1584275142525-de3b86ff6ac4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=192&h=192"
          alt=""
        />
        <div class="md:ml-10">
          <span class="text-gray-600 uppercase font-medium">July 27, 2020</span>
          <h2 class="mt-2 font-display font-semibold text-gray-900 text-2xl">
            Rose commits to be carbon neutral by 2022
          </h2>
          <p class="mt-4 text-gray-500">
            Rose has always been committed to innovation. Today, we're pushing
            that further by committing to carbon neutrality for all of our
            operations by 2022. This will be a monumental effort to undertake,
            but we're prepared to do it. Now, carbon neutrality for Rose may
            seem like an easy task, but it is very much...
          </p>
        </div>
      </article></router-link
    >
  </main>
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
