<template>
  <BaseLayout>
    <template #header>
      <div class="flex items-center justify-center mb-3">
        <LockClosedIcon v-if="isPast" class="h-5 w-5 mr-3" />
        <h1 class="h-title">Weekly Planning</h1>
      </div>

      <AppDateNav step="week" @back="isPast = true" @forward="isPast = false" />
    </template>

    <AppPageNav
      class="mb-5"
      :left-nav="{ title: 'My Goals', link: '/' }"
      :right-nav="{ title: 'Daily Planning', link: '/daily-plan' }"
    />

    <p class="text-sm italic text-gray-500">
      You can have up to 3 tasks per week
    </p>

    <ul class="mt-5 space-y-8">
      <AppTaskListItem
        v-for="task in weeklyTasksByDueDate"
        :key="task.id"
        :task="task"
      />
    </ul>

    <AppTaskForm v-if="!isPast" class="mt-8" />

    <RouterLink v-if="!isPast" v-slot="{ navigate }" to="/weekly-review" custom>
      <button
        class="
          mt-8
          py-2
          px-5
          text-white
          bg-green-400
          hover:bg-green-500
          w-full
          rounded-md
        "
        @click="navigate"
      >
        End of Week
      </button>
    </RouterLink>
  </BaseLayout>
</template>

<script lang="ts">
import AppDateNav from "@/components/AppDateNav.vue";
import AppPageNav from "@/components/AppPageNav.vue";
import AppTaskForm from "@/components/AppTaskForm.vue";
import { useStore } from "@/store/index";
import Task from "@/types/Task.interface";
import { LockClosedIcon } from "@heroicons/vue/outline";
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import moment from "moment";

export default defineComponent({
  components: {
    AppDateNav,
    AppPageNav,
    AppTaskForm,
    LockClosedIcon,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const isPast = ref(false);

    const goalWeeklyTasks = computed(() =>
      store.getters.getWeeklyTasksByGoalId(route.params.goalId)
    );

    const weeklyTasksByDueDate = computed(() =>
      goalWeeklyTasks.value.tasks.filter(
        (task: Task) =>
          task.dueDate === moment().format("DD/MM/YYYY").toString()
      )
    );

    return {
      weeklyTasksByDueDate,
      isPast,
    };
  },
});
</script>
