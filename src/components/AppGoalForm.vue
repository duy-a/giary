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
      <ul>
        <li
          v-for="error in errors"
          :key="error"
          class="list-disc list-inside text-red-500 text-sm"
        >
          {{ error }}
        </li>
      </ul>

      <textarea
        ref="goalTextArea"
        class="px-5 py-2 w-full border border-gray-200 rounded-md resize-none"
        rows="3"
        placeholder="Write down your S.M.A.R.T goal here ..."
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      ></textarea>

      <input
        class="px-5 py-2 w-full border border-gray-200 rounded-md resize-none"
        type="text"
        placeholder="Achieve your goal by dd/mm/yyyy"
        :value="dueDate"
        @input="$emit('update:dueDate', $event.target.value)"
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
import { CubeTransparentIcon } from "@heroicons/vue/outline";
import moment from "moment";
import { defineComponent, nextTick, ref } from "vue";

export default defineComponent({
  components: {
    CubeTransparentIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isSubmitting: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:title", "update:dueDate", "submitting"],
  setup(props, { emit }) {
    const goalTextArea = ref(null as unknown as HTMLTextAreaElement);
    const isVisibleGoalForm = ref(false);

    const errors = ref([] as Array<string>);

    function showGoalInput() {
      isVisibleGoalForm.value = !isVisibleGoalForm.value;

      nextTick(() => {
        goalTextArea.value.focus();
      });
    }

    function submit(): void {
      errors.value = [];

      if (props.title === "" || props.dueDate === "") {
        errors.value.push("Title & due date canot be empty");
        return;
      }

      if (
        moment(props.dueDate, "DD/MM/YYYY").format("DD/MM/YYYY") !==
        props.dueDate
      ) {
        errors.value.push("Due date must have a dd/mm/yyyy format");
        return;
      }

      emit("submitting");
      isVisibleGoalForm.value = false;
    }

    return {
      goalTextArea,
      isVisibleGoalForm,
      errors,
      showGoalInput,
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
