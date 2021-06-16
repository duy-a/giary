<template>
  <div>
    <button
      v-if="!isVisibleGoalForm"
      class="py-10 border border-gray-200 rounded-md hover:bg-gray-50 w-full"
      @click="showGoalInput()"
    >
      + Add Goal
    </button>

    <form v-else class="space-y-2" @submit.prevent="submit()">
      <textarea
        ref="goalTextArea"
        class="px-5 py-2 w-full border border-gray-200 rounded-md resize-none"
        rows="3"
        placeholder="Write down your S.M.A.R.T goal here ..."
      ></textarea>

      <input
        class="px-5 py-2 w-full border border-gray-200 rounded-md resize-none"
        type="text"
        placeholder="Achieve my goal by dd/mm/yyyy ..."
      />

      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="action-btn border border-gray-200 hover:bg-gray-100"
          @click="isVisibleGoalForm = false"
        >
          Cancel
        </button>

        <button
          type="submit"
          class="action-btn bg-green-400 text-white hover:bg-green-500"
        >
          <CubeTransparentIcon
            v-if="isSubmitting"
            class="h-5 w-5 animate-spin"
          />
          <span v-else>Add Goal</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { CubeTransparentIcon } from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    CubeTransparentIcon,
  },
  emits: ["submitted"],
  setup(_props, { emit }) {
    const goalTextArea = ref(null as unknown as HTMLTextAreaElement);
    const isVisibleGoalForm = ref(false);

    function showGoalInput() {
      isVisibleGoalForm.value = !isVisibleGoalForm.value;

      nextTick(() => {
        goalTextArea.value.focus();
      });
    }

    const isSubmitting = ref(false);

    function submit() {
      isSubmitting.value = true;

      setTimeout(() => {
        emit("submitted");
        isVisibleGoalForm.value = false;
        isSubmitting.value = false;
      }, 500);
    }

    return {
      goalTextArea,
      isVisibleGoalForm,
      showGoalInput,
      isSubmitting,
      submit,
    };
  },
});
</script>

<style lang="postcss" scoped>
.action-btn {
  @apply px-4 py-2 rounded-md;
}
</style>
