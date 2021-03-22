<template>
  <alt-navigation-menu />
  <main
    class="mx-auto px-4 pt-20 pb-64 lg:px-0 sm:max-w-screen-sm md:max-w-screen-md"
  >
    <h1
      class="text-4xl font-bold text-gray-900 sm:text-5xl font-display text-center"
    >
      Rose launches in Canada
    </h1>
    <p
      class="max-w-xs text-center mx-auto uppercase font-medium text-lg mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
    >
      December 8, 2020
    </p>
    <div class="mx-auto pt-8 prose sm:prose-lg">
      <p>
        OKLAHOMA CITY, OKLAHOMA &mdash; Today, we're proud to announce that Rose
        is officially launching in Canada.
      </p>
      <p>
        This comes at a time when a product like Rose is so desperately needed
        globally. The COVID-19 pandemic has upended the way we go about our
        everyday lives. More and more, the world moves online, and with Rose,
        Canadian medical institutions will finally have access to a
        ground-breaking medical platform.
      </p>
      <p>Here's what Rami O'Gallagher, CEO of Rose Medical, had to say:</p>
      <blockquote>
        <p>
          We're very excited to finally bring Rose to Canada. Our platform meets
          the moment like no other, and we can't wait for our Canadian friends
          to see what it has to offer.
        </p>
      </blockquote>
      <p>
        Considering Rose? We allow you to bring in patient and staff data from
        dozens of existing platforms with little hassle. If your institution’s
        platform isn’t yet supported, we’ll help you come up with a migration
        plan.
      </p>
      <p>
        Rose is also completely customizable, allowing you to control everything
        in your institution's deployment. You can disable or enable nearly every
        feature to fit the needs of your institution, like disabling virtual
        care if that's not a service you provide.
      </p>
    </div>
    <img
      class="rounded-lg shadow-md float-none mx-auto mt-12"
      src="https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634"
      alt="Vancouver skyline"
    />
  </main>
  <site-footer />
</template>

<script>
import AltNavigationMenu from "../../components/AltNavigationMenu.vue";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  components: {
    AltNavigationMenu,
    SiteFooter,
  },
};
</script>
