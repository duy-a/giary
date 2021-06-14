<template>
  <div>
    <header class="h-56 bg-green-400 px-5">
      <div class="relative h-full container mx-auto max-w-screen-md">
        <div class="absolute top-0 w-full flex justify-between pt-3 text-sm">
          <p>Goal Code Name</p>
          <p>01.01.2021</p>
        </div>

        <div class="flex flex-col h-full items-center justify-center">
          <slot name="header"></slot>
        </div>
      </div>
    </header>

    <main class="mx-auto container max-w-screen-md pt-5 px-5 pb-10">
      <slot></slot>
    </main>
  </div>
</template>
