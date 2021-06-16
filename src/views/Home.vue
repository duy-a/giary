<template>
  <BaseLayout>
    <template #header>
      <h1 class="h-title">My Goals</h1>
    </template>

    <p class="text-sm italic text-gray-500">You can have up to 2 goals</p>

    <ul class="mt-5 space-y-8">
      <RouterLink v-slot="{ navigate }" to="/weekly-plan" custom>
        <AppGoalListItem
          class="hover:bg-gray-50 cursor-pointer"
          @click="navigate"
        />
        <AppGoalListItem
          v-if="isGoalVisible"
          class="hover:bg-gray-50 cursor-pointer"
          @click="navigate"
        />
      </RouterLink>
    </ul>

    <AppGoalForm
      v-if="!isGoalVisible"
      class="mt-8"
      @submitted="isGoalVisible = true"
    />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppGoalListItem from "@/components/AppGoalListItem.vue";
import AppGoalForm from "@/components/AppGoalForm.vue";

export default defineComponent({
  components: {
    AppGoalListItem,
    AppGoalForm,
  },
  setup() {
    const isGoalVisible = ref(false);

    return {
      isGoalVisible,
    };
  },
});
</script>
