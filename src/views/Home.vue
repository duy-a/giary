<template>
  <AppBaseLayout title="my goals">
    <template #header>
      <h1 class="h-title">My Goals</h1>
    </template>

    <p class="text-sm italic text-gray-500">You can have up to 2 goals</p>

    <ul class="mt-5 space-y-8">
      <li v-for="n in 2" :key="n">
        <button
          class="
            p-10
            border border-gray-200
            rounded-md
            shadow
            text-left
            cursor-pointer
            hover:bg-gray-50
          "
          @click="seleteGoal()"
        >
          <div class="flex items-center justify-between mb-5">
            <p class="text-sm text-gray-500">31/12/2021</p>
            <div class="space-x-2 text-gray-400">
              <button @click.stop="editGoal()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button @click.stop="deleteGoal()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p class="text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis quo nam hic a cupiditate ex illum id. Enim voluptates, est
            vero possimus sunt accusamus corporis recusandae pariatur delectus
            ipsa?
          </p>
        </button>
      </li>
    </ul>

    <button
      v-if="!isVisibileAddGoalInput"
      class="
        mt-8
        py-10
        w-full
        border border-gray-200
        rounded-md
        cursor-pointer
        hover:bg-gray-50
        text-gray-600
      "
      @click="showGoalInput()"
    >
      + Add Goal
    </button>

    <form v-else @submit.prevent="submitNewGoal()">
      <textarea
        ref="newGoalTextArea"
        class="
          w-full
          mt-8
          p-5
          w-full
          border border-gray-200
          rounded-md
          resize-none
        "
        rows="3"
      ></textarea>
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="
            px-4
            py-2
            border border-gray-200
            rounded-md
            text-gray-600
            hover:bg-gray-100
          "
          @click="isVisibileAddGoalInput = !isVisibileAddGoalInput"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="
            px-4
            py-2
            border border-green-300
            bg-green-400
            rounded-md
            text-white
            hover:bg-green-500
          "
        >
          <span v-if="!isCreatingNewGoal">Add Goal</span>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
        </button>
      </div>
    </form>
  </AppBaseLayout>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import AppBaseLayout from "@/components/AppBaseLayout.vue";

export default defineComponent({
  components: {
    AppBaseLayout,
  },
  setup() {
    const newGoalTextArea = ref(null as unknown as HTMLTextAreaElement);
    const isVisibileAddGoalInput = ref(false);
    const isCreatingNewGoal = ref(false);

    function showGoalInput() {
      isVisibileAddGoalInput.value = !isVisibileAddGoalInput.value;

      nextTick(() => {
        newGoalTextArea.value.focus();
      });
    }

    function submitNewGoal() {
      isCreatingNewGoal.value = true;

      setTimeout(() => {
        isCreatingNewGoal.value = false;
        isVisibileAddGoalInput.value = false;
      }, 500);
    }

    function seleteGoal() {
      console.log("select goal btn pressed");
    }

    function editGoal(): void {
      console.log("edit goal btn pressed");
    }

    function deleteGoal(): void {
      console.log("delete goal btn pressed");
    }

    return {
      newGoalTextArea,
      isVisibileAddGoalInput,
      isCreatingNewGoal,
      showGoalInput,
      submitNewGoal,
      seleteGoal,
      editGoal,
      deleteGoal,
    };
  },
});
</script>
