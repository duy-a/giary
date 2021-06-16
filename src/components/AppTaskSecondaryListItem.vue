<template>
  <li
    class="flex items-center px-10 py-5 border border-gray-200 rounded-md"
    :class="{ 'flex-row-reverse': state === 'past' || state === 'reviewed' }"
  >
    <p
      class="font-light"
      :class="[state === 'past' || state === 'reviewed' ? 'ml-8' : 'mr-8']"
    >
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

      <template v-if="state === 'underReview'">
        <button @click="actionClicked()">
          <CheckIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button @click="actionClicked()">
          <LogoutIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
        <button @click="actionClicked()">
          <TrashIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
      </template>

      <template v-if="state === 'reviewed'">
        <TrashIcon class="h-5 w-5 text-gray-900" />
        <button @click="actionClicked()">
          <RefreshIcon class="h-5 w-5 hover:text-gray-700" />
        </button>
      </template>

      <template v-if="state === 'past'">
        <TrashIcon class="h-5 w-5 text-gray-900" />
      </template>
    </div>
  </li>
</template>

<script lang="ts">
import {
  CheckIcon,
  LogoutIcon,
  PencilIcon,
  RefreshIcon,
  TrashIcon,
} from "@heroicons/vue/outline";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PencilIcon,
    TrashIcon,
    CheckIcon,
    LogoutIcon,
    RefreshIcon,
  },
  props: {
    state: {
      type: String,
      default: "active",
      validator: (value: string): boolean => {
        return ["active", "underReview", "reviewed", "past"].includes(value);
      },
    },
  },
  emits: ["actionClicked"],
  setup(_props, { emit }) {
    function actionClicked() {
      emit("actionClicked");
    }

    return {
      actionClicked,
    };
  },
});
</script>
