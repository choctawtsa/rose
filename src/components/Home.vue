<template>
<header class="pt-6 pb-32 bg-center bg-cover hero-background">
  <div class="flex items-center justify-between lg:px-12 xl:px-16 2xl:px-36">
    <div class="flex-1 w-0">
      <img class="h-14" src="/logo-white.svg" alt="Rose logo">
    </div>
    <nav class="flex space-x-10">
      <router-link class="text-white" to="/">Home</router-link>
      <router-link class="text-gray-200" to="/newsroom">Newsroom</router-link>
      <router-link class="text-gray-200" to="/company">Company</router-link>
      <router-link class="text-gray-200" to="/about">About</router-link>
    </nav>
    <div class="flex justify-end flex-1 w-0">
      <button class="px-6 py-3 font-medium bg-white rounded">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Get my price</span>
      </button>
    </div>
  </div>
  <div class="flex items-center justify-between mx-auto lg:px-16 xl:px-20 2xl:max-w-8xl mt-28">
    <div>
      <h1 class="font-bold text-white lg:max-w-lg lg:text-5xl lg:leading-tight xl:max-w-2xl xl:text-6xl xl:leading-snug 2xl:max-w-4xl 2xl:leading-tight 2xl:text-7xl font-display">A medical platform for the digital age</h1>
      <p class="text-white lg:max-w-xl lg:mt-4 lg:pr-4 lg:text-xl xl:max-w-xl xl:pr-0 xl:text-lg 2xl:max-w-3xl 2xl:mt-8 2xl:text-2xl opacity-80">Meet the easiest way to manage patients, conduct virtual visits, and give patients easy and instant access to all of their data.</p>
    </div>
    <div class="bg-white rounded-lg lg:max-w-xs xl:max-w-sm">
      <div class="px-9 py-7">
      <span class="font-semibold text-gray-900 ">Subscribe to our newsletter</span>
      <form>
        <input type="text" class="w-full mt-2 px-2 border border-gray-200 shadow-sm h-11 rounded-md" placeholder="Name" />
        <input type="email" class="w-full mt-4 px-2 border border-gray-200 shadow-sm h-11 rounded-md" placeholder="Email address" />
      </form>
      <div class="h-px mx-auto my-9 bg-gray-200 w-60"></div>
      <button class="w-full py-3 bg-white rounded shadow-lg">
        <span class="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Sign me up</span>
      </button>
      </div>
      <div class="px-9 py-6 bg-gray-100 border-t-2 border-gray-200 rounded-b-lg">
        <p class="text-xs text-gray-500">By signing up, you are agreeing to our <router-link to="/privacy-policy" class="font-semibold text-gray-600">Privacy Policy</router-link> and consent to receiving marketing emails.</p>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="css" scoped>
.hero-background {
  background-image: linear-gradient(45deg, rgba(236,72,153,1) 0%, rgba(249,115,22,1) 100%), url('/home-hero-background.png');
  background-blend-mode: overlay;
}
</style>