<template>
  <div class="flex items-center justify-center space-x-3">
    <button>
      <ChevronLeftIcon class="h-6 w-6" @click="back()" />
    </button>
    <p class="text-white">{{ date }}</p>
    <button>
      <ChevronRightIcon class="h-6 w-6" @click="forward()" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    step: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return ["day", "week"].includes(value);
      },
    },
  },
  emits: ["back", "forward"],
  setup(props, { emit }) {
    const date = ref("");
    date.value = props.step === "week" ? "June - Week 2" : "Fri - 02.01.2021";

    function back(): void {
      date.value = props.step === "week" ? "June - Week 1" : "Thu - 01.01.2021";
      emit("back");
    }

    function forward(): void {
      date.value = props.step === "week" ? "June - Week 2" : "Fri - 02.01.2021";
      emit("forward");
    }

    return {
      date,
      back,
      forward,
    };
  },
});
</script>
