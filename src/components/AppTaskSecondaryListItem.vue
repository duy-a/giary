<template>
  <li
    class="flex items-center px-10 py-5 border border-gray-200 rounded-md"
    :class="{ 'flex-row-reverse': state === 'past' }"
  >
    <p class="font-light" :class="[state === 'past' ? 'ml-8' : 'mr-8']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      repellat sunt recusandae,
    </p>
    <div class="flex justify-between space-x-2 text-gray-400">
      <template v-if="state === 'active'">
        <button>
          <PencilIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button>
          <TrashIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
      </template>

      <template v-if="state === 'review'">
        <button>
          <CheckIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button>
          <LogoutIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button>
          <TrashIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
      </template>

      <template v-if="state === 'past'">
        <TrashIcon class="h-5 w-5 text-gray-900" />
      </template>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  PencilIcon,
  TrashIcon,
  CheckIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    PencilIcon,
    TrashIcon,
    CheckIcon,
    LogoutIcon,
  },
  props: {
    state: {
      type: String,
      default: "active",
      validator: (value: string): boolean => {
        return ["active", "review", "past"].includes(value);
      },
    },
  },
});
</script>
