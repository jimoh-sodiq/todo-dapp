<template>
  <nav
    class="flex items-center justify-between w-full sm:rounded-full sm:py-2.5 sm:bg-container sm:px-6 text-primary mb-8 sm:mb-10"
  >
    <Icon name="ic:sharp-menu" class="w-7 h-7 sm:w-10 sm:h-10" />
    <p class="font-medium hidden sm:inline-block">Good evening, Alexander</p>
    <div class="flex items-center gap-x-2 sm:gap-x-4">
      <Icon name="line-md:moon" class="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" />
      <Icon name="ic:outline-settings" class="w-6 h-6 sm:w-8 sm:h-8cursor-pointer" />
      <Icon name="ic:round-account-circle" class="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" />
    </div>
  </nav>
  <div class="sm:hidden mb-6">
    <p class="font-bold text-primary text-lg">Good evening, Alexander</p>
    <p class="text-xs text-secondary font-semibold">You have 3 tasks for today</p>
  </div>
</template>
