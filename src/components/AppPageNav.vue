<template>
  <div class="flex justify-between">
    <RouterLink
      :to="leftNav.link"
      tag="button"
      class="
        px-4
        py-1
        border border-gray-300
        rounded-md
        text-gray-700
        hover:bg-gray-100
      "
    >
      {{ leftNav.title }}
    </RouterLink>

    <RouterLink
      :to="rightNav.link"
      tag="button"
      class="px-4 py-1 rounded-md text-white bg-green-400 hover:bg-green-500"
    >
      {{ rightNav.title }}
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface NavItem {
  title: string;
  link: string;
}

export default defineComponent({
  props: {
    leftNav: {
      type: Object as PropType<NavItem>,
      required: true,
      default: () => ({
        title: "My Goals",
        link: "/",
      }),
    },
    rightNav: {
      type: Object as PropType<NavItem>,
      required: true,
      default: () => ({
        title: "My Goals",
        link: "/",
      }),
    },
  },
});
</script>
