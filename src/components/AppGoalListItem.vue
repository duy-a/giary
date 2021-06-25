<template>
  <div>
    <RouterLink
      v-if="!isEditMode"
      v-slot="{ navigate }"
      :to="navigateTo"
      custom
    >
      <li
        class="p-10 border border-gray-200 rounded-md text-left"
        :class="{ 'hover:bg-gray-50 cursor-pointer': isHoverable }"
        @click="navigate()"
      >
        <div class="flex items-center justify-between mb-5">
          <p class="text-gray-400 text-sm">
            {{ formatDate(goal.dueDate, "DD/MM/YYYY") }}
          </p>
          <div class="space-x-2 text-gray-400 -mt-5">
            <button @click.stop="isEditMode = true">
              <PencilIcon class="h-5 w-5 hover:text-gray-700" />
            </button>
            <button @click.stop="$emit('delete')">
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
    </RouterLink>

    <AppGoalForm
      v-else
      v-model:title="toUpdateGoal.title"
      v-model:dueDate="toUpdateGoal.dueDate"
      submit-btn-text="Update"
      class="mt-8 p-5 border border-gray-200 rounded-md text-left"
      :have-trigger-form-btn="false"
      @submitting="update()"
      @cancel="cancel()"
    />
  </div>
</template>

<script lang="ts">
import AppGoalForm from "@/components/AppGoalForm.vue";
import Goal from "@/types/Goal.interface";
import { PencilIcon, TrashIcon } from "@heroicons/vue/outline";
import moment from "moment";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  components: {
    PencilIcon,
    TrashIcon,
    AppGoalForm,
  },
  props: {
    goal: {
      type: Object as PropType<Goal>,
      required: true,
    },
    navigateTo: {
      type: String,
      required: true,
      default: "/",
    },
    isHoverable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update", "delete"],
  setup(props, { emit }) {
    function formatDate(date: string, format: string): string {
      return moment(date, format, true).format(format);
    }

    const isEditMode = ref(false);
    const toUpdateGoal = ref({ ...props.goal });
    function update() {
      emit("update", toUpdateGoal.value);
      isEditMode.value = false;
    }

    function cancel() {
      isEditMode.value = false;
      toUpdateGoal.value = { ...props.goal };
    }

    return {
      formatDate,
      isEditMode,
      toUpdateGoal,
      update,
      cancel,
    };
  },
});
</script>
