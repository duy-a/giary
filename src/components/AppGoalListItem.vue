<template>
  <li class="p-10 border border-gray-200 rounded-md text-left">
    <div class="flex items-center justify-between mb-5">
      <p class="text-gray-400 text-sm">31/12/2021</p>
      <div class="space-x-2 text-gray-400 -mt-5">
        <button>
          <PencilIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button>
          <TrashIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
      </div>
    </div>

    <div class="flex items-center">
      <p class="text-lg font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis
        quo nam hic a cupiditate ex illum id. Enim voluptates, est vero possimus
        sunt accusamus corporis recusandae pariatur delectus ipsa?
      </p>
    </div>
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
