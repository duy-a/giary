<template>
  <div>
    <header class="flex items-center h-56 bg-green-400 px-5">
      <div class="mx-auto container max-w-screen-md">
        <slot name="header"></slot>
      </div>
    </header>

    <main class="mx-auto container max-w-screen-md pt-5 px-5 pb-10">
      <slot></slot>
    </main>
  </div>
</template>
