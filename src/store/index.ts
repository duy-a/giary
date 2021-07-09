import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import Goal from "@/types/Goal.interface";
import { v4 as uuidv4 } from "uuid";
import Task, { TaskStatus } from "@/types/Task.interface";
import moment from "moment";

export interface State {
  goalList: Goal[];
  weeklyTasks: { goalId: string; tasks: Task[] }[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    goalList: [
      {
        id: "fdde9397-337c-4a75-9641-968c37374a32",
        title: "Hello world",
        dueDate: "31/12/2021",
      },
    ],
    weeklyTasks: [
      {
        goalId: "fdde9397-337c-4a75-9641-968c37374a32",
        tasks: [
          {
            id: "fdde9397-337c-4a75-9641-968c37373ff3",
            title: "In progress weekly Task 1",
            status: TaskStatus.InProgress,
            dueDate: moment().format("DD/MM/YYYY").toString(),
            rescheduledFrom: "",
            rescheduledTo: "",
          },
        ],
      },
    ],
  },
  getters: {
    // Weekly Task Operations
    getWeeklyTasksByGoalId(state: State) {
      return (goalId: string) =>
        state.weeklyTasks.filter((week) => week.goalId == goalId)[0];
    },
  },
  mutations: {
    addGoal(state: State, goal: Goal): void {
      goal.id = uuidv4();
      state.goalList.push(goal);
    },
    updateGoal(state: State, goalData: Goal): void {
      const index = state.goalList.findIndex((goal) => goal.id === goalData.id);
      state.goalList.splice(index, 1, goalData);
    },
    deleteGoal(state: State, goalId: string): void {
      const index = state.goalList.findIndex((goal) => goal.id === goalId);
      state.goalList.splice(index, 1);
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
