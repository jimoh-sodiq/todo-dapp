<template>
  <div class="w-full">
    <p class="font-medium text-primary sm:hidden">Task groups</p>
    <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 sm:gap-x-6 py-4 rounded-xl sm:bg-container sm:px-6 text-primary">
        <div class="flex flex-col gap-y-4 bg-box py-5 px-4 rounded-lg" v-for="n in 4" :key="n">
            <div class="flex items-center gap-x-4 mx-auto">
                <div class="rounded-full w-5 h-5 bg-yellow-400" />
                <span class="text-primary text-sm font-medium inline-block">Personal</span>
            </div>
            <div class="w-fit mx-auto text-xs text-secondary font-medium">25 tasks</div>
            <div class="w-full rounded-full h-4 bg-container">
                <div class="w-[45%] rounded-full h-full bg-background" />
            </div>
        </div>
    </div>
  </div>
</template>
