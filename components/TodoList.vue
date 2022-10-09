<template>
  <div
    class="sm:bg-container rounded-xl h-full flex flex-col justify-between grow gap-y-4 sm:py-4 sm:px-6 text-primary"
  >
    <div class="flex flex-col gap-y-4">
      <div class="flex items-center justify-between sm:hidden">
        <p class="text-primary font-medium text-lg">Today's tasks</p>
        <select class="outline-none bg-transparent text-sm px-3 cursor-pointer">
          <option>Sort by</option>
        </select>
      </div>
      <div
        class="rounded-lg sm:rounded-full w-full bg-box text-primary text-sm flex flex-col sm:flex-row sm:items-center gap-x-6 px-3 sm:px-4 py-2 justify-between"
        v-for="n in 5"
        :key="n"
      >
        <div class="flex items-center gap-x-3">
          <Icon
            name="ic:round-check"
            class="w-4 h-4 sm:w-6 sm:h-6 shrink-0 rounded-full border text-yellow-400 border-yellow-400 sm:text-current sm:border-current"
          />
          <span class="break-words">Eating all my food today</span>
        </div>
        <div
          class="flex items-center gap-x-2 sm:gap-x-3 w-fit whitespace-nowrap"
        >
          <div class="w-5 h-5 rounded-full sm:bg-yellow-400" />
          <div
            class="flex flex-row sm:flex-col items-center gap-x-2 sm:text-center"
          >
            <span class="">20-02-2022</span>
            <span class="text-secondary text-xs">10:42-Sun</span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 bg-primary w-fit mx-auto rounded-full cursor-pointer">
        <Icon name="ic:round-plus" class="w-8 h-8 text-background" />
    </div>
  </div>
</template>
