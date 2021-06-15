<template>
  <li
    class="
      pt-5
      px-10
      pb-10
      border border-gray-200
      rounded-md
      text-left
      cursor-pointer
    "
  >
    <div class="flex items-center justify-end mb-5">
      <div class="space-x-2 text-gray-400">
        <button>
          <PencilIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button>
          <TrashIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
      </div>
    </div>

    <p class="text-lg font-light">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis quo
      nam hic a cupiditate ex illum id. Enim voluptates, est vero possimus sunt
      accusamus corporis recusandae pariatur delectus ipsa?
    </p>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    PencilIcon,
    TrashIcon,
  },
});
</script>
