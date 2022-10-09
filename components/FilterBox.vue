<template>
  <div
    class="bg-container rounded-xl h-full w-60 hidden lg:flex flex-col justify-between gap-y-4 py-4 px-6 text-primary"
  >
    <div class="flex flex-col gap-y-4">
      <label
        class="flex items-center justify-between bg-box px-4 py-2 rounded-lg text-primary"
      >
        <input type="radio" class="hidden" />
        <div class="flex items-center gap-x-3">
          <Icon name="ic:round-dashboard" class="w-6 h-6" />
          <span class="text-sm">All</span>
        </div>
        <span class="text-secondary text-xs">30</span>
      </label>
      <label
        class="flex items-center justify-between bg-box px-4 py-2 rounded-lg text-primary"
      >
        <input type="radio" class="hidden" />
        <div class="flex items-center gap-x-3">
          <Icon name="ic:round-calendar-today" class="w-6 h-5" />
          <span class="text-sm">Today</span>
        </div>
        <span class="text-secondary text-xs">30</span>
      </label>
      <label
        class="flex items-center justify-between bg-box px-4 py-2 rounded-lg text-primary"
      >
        <input type="radio" class="hidden" />
        <div class="flex items-center gap-x-3">
          <Icon name="ic:round-check" class="w-5 h-5 rounded-full border" />
          <span class="text-sm">Completed</span>
        </div>
        <span class="text-secondary text-xs">30</span>
      </label>
    </div>
    <p class="text-center text-lg uppercase">Sort by</p>
  </div>
</template>
