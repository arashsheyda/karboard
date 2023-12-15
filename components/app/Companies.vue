<script setup lang="ts">
defineProps<{
  logos: any
}>()
</script>

<template>
  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="border-b border-gray-200 py-6 lg:py-4">
        <div class="flex flex-wrap items-center justify-around text-center">

          <div class="lg:w-auto w-full px-2 py-3 lg:py-2">
            <div class="whitespace-nowrap	text-2xl font-medium text-green-500">
              Trusted by
            </div>
          </div>

          <div v-for="item of logos" class="w-1/2 px-2 py-3 sm:w-1/3 lg:w-auto lg:py-2">
            <NuxtLink class="grayscale hover:filter-none transition duration-300" :to="item.to" :title="item.label">
              <div class="logo flex justify-center">
                <div v-if="item.logo.startsWith('<svg')" class="w-28" v-html="item.logo" />
                <img v-else class="h-10 w-28" :src="item.logo" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>