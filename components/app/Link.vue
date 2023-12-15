<script setup lang="ts">
import { NuxtLink } from '#components'

defineProps<{
  item: any
}>()
</script>

<template>
  <component
    :is="item.to ? NuxtLink : 'button'"
    :to="item.to"
    class="flex items-center px-3 py-2 text-sm font-medium text-green-500"
    :class="[{ 'hover:underline': item.to }, item.class]"
    @click="item.onClick"
  >
    {{ item.label }}
  </component>
</template>