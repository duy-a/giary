<template>
  <BaseLayout>
    <template #header>
      <div class="flex items-center justify-center mb-3">
        <LockClosedIcon v-if="isPast" class="h-5 w-5 mr-3" />
        <h1 class="h-title">Daily Planning</h1>
      </div>

      <AppDateNav step="day" @back="isPast = true" @forward="isPast = false" />
    </template>

    <AppPageNav
      class="mb-5"
      :left-nav="{ title: 'Weekly Planning', link: '/weekly-plan' }"
      :right-nav="{
        title: 'End of Day',
        link: '/daily-review',
        isInvisible: isPast,
      }"
    />

    <section>
      <h2 class="font-medium">The most important task of the day</h2>

      <ul class="mt-2 space-y-8">
        <AppTaskListItem
          v-if="!isPast && isMaintaskVisible"
          class="border-green-500"
        />
        <AppTaskListItem v-if="isPast" state="past" class="border-green-500" />
      </ul>

      <AppTaskForm
        v-if="!isPast && !isMaintaskVisible"
        class="mt-8"
        @submitted="isMaintaskVisible = true"
      />
    </section>

    <section class="mt-8">
      <h2 class="font-medium">Additional tasks (up to 3 task per day)</h2>

      <ul class="mt-2 space-y-4">
        <AppTaskSecondaryListItem v-if="!isPast" />
        <AppTaskSecondaryListItem v-if="!isPast" />
        <AppTaskSecondaryListItem v-if="!isPast && isAdditionalTaskVisible" />
        <AppTaskSecondaryListItem v-if="isPast" state="past" />
      </ul>

      <AppTaskForm
        v-if="!isPast && !isAdditionalTaskVisible"
        class="mt-4"
        @submitted="isAdditionalTaskVisible = true"
      />
    </section>

    <section class="mt-8">
      <h2 class="font-medium">Notes</h2>
      <textarea
        v-if="!isPast"
        class="mt-2 p-5 w-full border border-gray-200 rounded-md resize-none"
        rows="5"
        placeholder="Write down your notes ..."
      ></textarea>
      <p
        v-if="isPast"
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
  </BaseLayout>
</template>

<script lang="ts">
import AppDateNav from "@/components/AppDateNav.vue";
import AppPageNav from "@/components/AppPageNav.vue";
import AppTaskForm from "@/components/AppTaskForm.vue";
import AppTaskListItem from "@/components/AppTaskListItem.vue";
import AppTaskSecondaryListItem from "@/components/AppTaskSecondaryListItem.vue";
import { LockClosedIcon } from "@heroicons/vue/outline";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    LockClosedIcon,
    AppDateNav,
    AppPageNav,
    AppTaskListItem,
    AppTaskForm,
    AppTaskSecondaryListItem,
  },
  setup() {
    const isMaintaskVisible = ref(false);
    const isAdditionalTaskVisible = ref(false);
    const isPast = ref(false);

    return {
      isMaintaskVisible,
      isAdditionalTaskVisible,
      isPast,
    };
  },
});
</script>
