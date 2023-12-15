<script setup lang="ts">
const karboard = useKarboard()
const { auth } = useModal()
</script>

<template>
  <header class="fixed z-50 w-full backdrop-blur">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="flex h-16 items-center justify-between md:h-20">

        <div class="mr-4 shrink-0">
          <AppLogo />
        </div>

        <nav class="flex grow">

          <ul class="flex grow flex-wrap items-center justify-end gap-2">
            <li v-for="item of karboard.nav">
              <AppLink :item="item" />
            </li>
          </ul>

        </nav>

        <AppModal v-model="auth">
          sdg
        </AppModal>

      </div>
    </div>
  </header>
</template>