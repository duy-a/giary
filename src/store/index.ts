import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import Goal from "@/types/Goal.interface";
import { v4 as uuidv4 } from "uuid";

export interface State {
  goalList: Goal[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    goalList: [],
  },
  mutations: {
    addGoal(state: State, goal: Goal): void {
      goal.id = uuidv4();
      state.goalList.push(goal);
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
