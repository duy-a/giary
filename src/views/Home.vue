<template>
  <BaseLayout>
    <template #header>
      <h1 class="h-title">My Goals</h1>
    </template>

    <p class="text-sm italic text-gray-500">You can have up to 2 goals</p>

    <ul class="mt-5 space-y-8">
      <RouterLink v-slot="{ navigate }" to="/weekly-plan" custom>
        <AppTaskListItem
          class="hover:bg-gray-50 cursor-pointer"
          @click="navigate"
        />
      </RouterLink>
    </ul>

    <AppGoalForm class="mt-8" />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppGoalForm from "@/components/AppGoalForm.vue";

export default defineComponent({
  components: {
    AppGoalForm,
  },
});
</script>
