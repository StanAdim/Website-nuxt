<script  setup>
const toggleSidebar = usetoggleSidebar();
function OpenDrawer(){
    toggleSidebar.value?toggleSidebar.value = false:toggleSidebar.value = true
}
</script>

<template>
  <div class="bg-gray-100">
    <div class="h-screen flex overflow-hidden bg-gray-200">
      <!-- Sidebar -->
      <TheSidebar ref="openDrawerRef" />
      <!-- Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Navbar -->
        <div class="bg-white shadow">
          <div class="container mx-auto">
            <div class="flex justify-between items-center py-4 px-2">
              <h1 class="text-xl font-semibold">ICTC Website</h1>
              <button
                class="text-gray-500 hover:text-gray-600"
                id="open-sidebar"
                @click="OpenDrawer"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Content Body -->
        <div class="flex-1 overflow-auto p-4">
          <h1 class="text-2xl font-semibold">Admin Dashbard </h1>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
