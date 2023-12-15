<script setup lang="ts">
import type { Job } from '../../types'

defineProps<{
  item: Job
}>()
</script>

<template>
  <div class="group border-b border-gray-200 c6kou cmd8n">
    <div class="px-4 py-6">
      <div class="items-center cb7bz sm:flex gap-4">
        <div class="shrink-0">
          <img :src="item.logo" width="56" height="56" :alt="item.company" class="bg-gray-100 rounded-full p-2">
        </div>
        <div class="grow items-center justify-between lg:flex">
          <div>
            <div class="flex items-start">
              <div class="capitalize text-sm font-semibold text-gray-800 mb-2">
                {{ item.company }}
              </div>
            </div>
            <div class="mb-2">
              <NuxtLink class="capitalize text-xl font-bold text-gray-800">
                {{ item.position }}
              </NuxtLink>
            </div>
            <div v-if="item.badges.length" class="-m-1">
              <NuxtLink
                v-for="badge of item.badges"
                :key="badge"
                class="m-2 inline-flex whitespace-nowrap rounded-md bg-gray-100 px-2 p-1 text-xs font-medium text-gray-500 hover:text-black"
              >
                {{ badge }}
              </NuxtLink>
            </div>
          </div>
          <div class="relative flex items-center gap-4">
            <div class="absolute right-10 md:opacity-0 md:group-hover:right-0 md:group-hover:opacity-100 transition-all duration-300">
              <NuxtLink class="rounded-full px-4 py-2 text-sm bg-green-500 text-white hover:bg-green-700" to="/">
                Apply Now
                <Icon name="i-ph-arrow-right" />
              </NuxtLink>
            </div>
            <div v-if="item.createdAt" class="text-sm italic text-gray-500 opacity-100 group-hover:opacity-0 transition-all duration-300 pointer-events-none">
              <!-- todo: format date -->
              {{ item.createdAt }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
