<template>
  <div class="flex justify-between">
    <RouterLink
      v-if="leftNav.isInvisible === undefined"
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
      v-if="rightNav.isInvisible === undefined || !rightNav.isInvisible"
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
  isInvisible?: boolean;
}

export default defineComponent({
  props: {
    leftNav: {
      type: Object as PropType<NavItem>,
      required: true,
      default: () => ({
        title: "My Goals",
        link: "/",
        isInvisible: true,
      }),
    },
    rightNav: {
      type: Object as PropType<NavItem>,
      required: true,
      default: () => ({
        title: "My Goals",
        link: "/",
        isInvisible: true,
      }),
    },
  },
});
</script>
