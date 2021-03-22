<template>
  <alt-navigation-menu />
  <main
    class="mx-auto px-4 pt-20 pb-64 lg:px-0 sm:max-w-screen-sm md:max-w-screen-md"
  >
    <h1
      class="text-4xl font-bold text-gray-900 sm:text-5xl font-display text-center leading-tight sm:leading-tight"
    >
      Rose commits to be carbon neutral by 2022
    </h1>
    <p
      class="max-w-xs text-center mx-auto uppercase font-medium text-lg mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
    >
      July 27, 2020
    </p>
    <div class="mx-auto pt-8 prose sm:prose-lg">
      <p>
        OKLAHOMA CITY, OKLAHOMA &mdash; Rose has always been committed to
        innovation. Today, we're pushing that further by committing to carbon
        neutrality for all of our operations by 2022.
      </p>
      <p>
        This will be a monumental effort to undertake, but we're prepared to do
        it. Now, carbon neutrality for Rose may <i>seem</i> like an easy task,
        but it is very much not so. Our operations span the globe, from
        headquarters across each of our markets, to customer service centers, to
        data centers. All of these will be carbon neutral within 17 months.
      </p>
      <p>
        Currently, Rose employs around 2,400 employees globally. We have offices
        in large cities worldwide, like Oklahoma City, Phoenix, Atlanta,
        Vancouver, and London. Many employees are found in our customer service
        centers, and are paid competitive wages by at least American standards,
        and often higher if the local economy necessitates it.
      </p>
      <p>
        At present, these facilities are not anywhere near carbon neutral.
        Through this commitment, we plan to invest $1.2 billion to either
        convert existing facilities to be carbon neutral, or move to locations
        that are. This effort will be difficult, but we believe it to be an
        imperative.
      </p>
    </div>
    <img
      class="rounded-lg shadow-md float-none mx-auto mt-12"
      src="https://images.unsplash.com/photo-1584275142525-de3b86ff6ac4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634"
      alt="Wind farm"
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
