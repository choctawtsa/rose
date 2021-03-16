<template>
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
            <router-link class="text-gray-500 hover:text-gray-700" to="/company"
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
</template>
