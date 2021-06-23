<template>
  <BaseLayout>
    <template #header>
      <h1 class="h-title">My Goals</h1>
    </template>

    <p class="text-sm italic text-gray-500">You can have up to 2 goals</p>

    <ul class="mt-5 space-y-8">
      <RouterLink v-slot="{ navigate }" to="/weekly-plan" custom>
        <AppGoalListItem
          v-for="goal in goalList"
          :key="goal.title"
          :goal="goal"
          class="hover:bg-gray-50 cursor-pointer"
          @click="navigate"
        />
      </RouterLink>
    </ul>

    <AppGoalForm
      v-if="goalList.length < 2"
      v-model:title="newGoal.title"
      v-model:dueDate="newGoal.dueDate"
      class="mt-8"
      @submitting="addGoal()"
    />
  </BaseLayout>
</template>

<script lang="ts">
import { useStore } from "@/store/index";
import AppGoalForm from "@/components/AppGoalForm.vue";
import AppGoalListItem from "@/components/AppGoalListItem.vue";
import { defineComponent, ref } from "vue";
import Goal from "@/types/Goal.interface";

export default defineComponent({
  components: {
    AppGoalListItem,
    AppGoalForm,
  },
  setup() {
    const store = useStore();

    const { goalList } = store.state;

    const newGoal = ref({
      title: "",
      dueDate: "",
    } as Goal);

    function addGoal() {
      if (goalList.length < 2) {
        store.commit("addGoal", newGoal.value);
        newGoal.value = {
          title: "",
          dueDate: "",
        } as Goal;
      }
    }

    return {
      goalList,
      newGoal,
      addGoal,
    };
  },
});
</script>
