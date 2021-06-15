<template>
  <div class="flex items-center justify-center space-x-3">
    <button>
      <ChevronLeftIcon class="h-6 w-6" @click="back()" />
    </button>
    <p class="text-white">June - {{ week }}</p>
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
      validator(value: string) {
        return ["day", "week"].includes(value);
      },
    },
  },
  emits: ["back", "forward"],
  setup(_props, { emit }) {
    const week = ref("Week 2");

    function back(): void {
      week.value = "Week 1";
      emit("back");
    }

    function forward(): void {
      week.value = "Week 2";
      emit("forward");
    }

    return {
      week,
      back,
      forward,
    };
  },
});
</script>
