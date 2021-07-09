<template>
  <li class="p-10 border border-gray-200 rounded-md text-left">
    <div
      v-if="state === 'active' || state === 'underReview'"
      class="flex items-center justify-end mb-5"
    >
      <div class="space-x-2 text-gray-400 -mt-5">
        <template v-if="state === 'active'">
          <button @click="actionClicked()">
            <PencilIcon class="h-5 w-5 hover:text-gray-700" />
          </button>
          <button @click="actionClicked()">
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
      </div>
    </div>

    <div class="flex items-center">
      <LogoutIcon v-if="state === 'past'" class="h-14 w-14 mr-10" />

      <template v-if="state === 'reviewed'">
        <div class="flex space-x-2 mr-9">
          <LogoutIcon class="h-5 w-5" />
          <button @click="actionClicked()">
            <RefreshIcon class="h-5 w-5 text-gray-400 hover:text-gray-700" />
          </button>
        </div>
      </template>

      <p class="text-lg font-light">
        {{ task.title }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import Task from "@/types/Task.interface";
import {
  CheckIcon,
  LogoutIcon,
  PencilIcon,
  RefreshIcon,
  TrashIcon,
} from "@heroicons/vue/outline";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: {
    PencilIcon,
    TrashIcon,
    CheckIcon,
    LogoutIcon,
    RefreshIcon,
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
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
