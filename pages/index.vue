<template>
    <div class="min-h-screen py-4 sm:py-8 lg:py-12 bg-background">
        <div class="max-w-6xl mx-auto px-3">
            <NavBar />
            <div class="flex gap-x-6 mb-8 sm:mb-6">
                <TheGroups />
                <TheSummary />
            </div>
            <div>
                <FilterBox />
                <TodoList />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCounterStore } from '@/store/todo.js'
    const store = useCounterStore()

</script>

<style lang="scss" scoped>

</style>