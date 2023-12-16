<script setup>
definePageMeta({
  layout: "auth",
});
useHead({
    title:'ICTC - Login'
})
</script>

<template>
  <!-- <div class="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center"> -->
  <div class="min-h-screen flex flex-col justify-center items-center">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md">
      <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
        <img
          src="/images/ictc-logo.png"
          class="h-1/2 w-1/2 rounded-lg shadow-xl dark:shadow-gray-800"
          alt=""
        />
      </div>
      <form class="space-y-6">
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="w-full px-4 py-2 rounded-lg border border-gray-400"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="w-full px-4 py-2 rounded-lg border border-gray-400"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <button
            class="w-full bg-emerald-400 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-lg"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>