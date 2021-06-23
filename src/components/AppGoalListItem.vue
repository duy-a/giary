<template>
  <li class="p-10 border border-gray-200 rounded-md text-left">
    <div class="flex items-center justify-between mb-5">
      <p class="text-gray-400 text-sm">
        {{ formatDate(goal.dueDate, "DD/MM/YYYY") }}
      </p>
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
        {{ goal.title }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/outline";
import Goal from "@/types/Goal.interface";
import moment from "moment";

export default defineComponent({
  components: {
    PencilIcon,
    TrashIcon,
  },
  props: {
    goal: {
      type: Object as PropType<Goal>,
      required: true,
    },
  },
  setup() {
    function formatDate(date: string, format: string): string {
      return moment(date, format, true).format(format);
    }

    return {
      formatDate,
    };
  },
});
</script>
