import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import Goal from "@/types/Goal.interface";

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
      state.goalList.push(goal);
    },
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
