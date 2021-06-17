<template>
  <BaseLayout>
    <template #header>
      <div class="flex items-center justify-center mb-3">
        <h1 class="h-title">Weekly Review</h1>
      </div>
    </template>

    <AppPageNav
      class="mb-5"
      :left-nav="{ title: 'My Goals', link: '/' }"
      :right-nav="{ title: 'Weekly Planning', link: '/weekly-plan' }"
    />

    <p class="text-sm italic text-gray-500">
      You can have up to 3 tasks per week
    </p>

    <ul class="mt-5 space-y-8">
      <AppTaskListItem
        state="underReview"
        @actionClicked="isTaskReviewed = !isTaskReviewed"
      />
      <AppTaskListItem
        :state="isTaskReviewed ? 'reviewed' : 'underReview'"
        @actionClicked="isTaskReviewed = !isTaskReviewed"
      />
    </ul>

    <RouterLink v-slot="{ navigate }" to="/weekly-plan" custom>
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
        Complete
      </button>
    </RouterLink>
  </BaseLayout>
</template>

<script lang="ts">
import AppPageNav from "@/components/AppPageNav.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    AppPageNav,
  },
  setup() {
    const isTaskReviewed = ref(false);

    return {
      isTaskReviewed,
    };
  },
});
</script>
