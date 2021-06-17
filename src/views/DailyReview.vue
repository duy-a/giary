<template>
  <BaseLayout>
    <template #header>
      <div class="flex items-center justify-center mb-3">
        <h1 class="h-title">Daily Review</h1>
      </div>
    </template>

    <AppPageNav
      class="mb-5"
      :left-nav="{ title: 'Weekly Planning', link: '/weekly-plan' }"
      :right-nav="{
        title: 'Daily Planning',
        link: '/daily-plan',
      }"
    />

    <section>
      <h2 class="font-medium">The most important task of the day</h2>

      <ul class="mt-2 space-y-8">
        <AppTaskListItem
          :state="isMainTaskReviewed ? 'reviewed' : 'underReview'"
          class="border-green-500"
          @actionClicked="isMainTaskReviewed = !isMainTaskReviewed"
        />
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="font-medium">Additional tasks (up to 3 task per day)</h2>

      <ul class="mt-2 space-y-4">
        <AppTaskSecondaryListItem
          state="underReview"
          @actionClicked="isAddtionalTaskReviewed = !isAddtionalTaskReviewed"
        />
        <AppTaskSecondaryListItem
          :state="isAddtionalTaskReviewed ? 'reviewed' : 'underReview'"
          @actionClicked="isAddtionalTaskReviewed = !isAddtionalTaskReviewed"
        />
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="font-medium">Notes</h2>
      <p
        class="
          mt-2
          p-10
          w-full
          border border-gray-200
          rounded-md
          font-light
          bg-gray-50
        "
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error deleniti
        possimus est minima aliquam quia a, nihil aut alias sed in soluta
        quibusdam nobis nulla praesentium tempora, aliquid ratione rerum!
      </p>
    </section>

    <RouterLink v-slot="{ navigate }" to="/daily-plan" custom>
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
import AppTaskListItem from "@/components/AppTaskListItem.vue";
import AppTaskSecondaryListItem from "@/components/AppTaskSecondaryListItem.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    AppPageNav,
    AppTaskListItem,
    AppTaskSecondaryListItem,
  },
  setup() {
    const isMainTaskReviewed = ref(false);
    const isAddtionalTaskReviewed = ref(false);

    return {
      isMainTaskReviewed,
      isAddtionalTaskReviewed,
    };
  },
});
</script>
