import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
//   States

  const count = ref(65);
  const name = ref("Eduardo");

//   Getters

  const doubleCount = computed(() => count.value * 2);

//  Actions

  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
