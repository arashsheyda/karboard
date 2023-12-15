<script setup lang="ts">
import { useVModel, onClickOutside } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
}>()

const window = ref<HTMLElement>()

const model = useVModel(props, 'modelValue')

onClickOutside(window, () => {
  model.value = false
})
</script>

<template>
  <Transition>
    <Teleport v-if="model" to="body">
      <div class="fixed inset-0 bg-black/30 backdrop-blur z-50 flex justify-center items-center">
        <div ref="window" class="p-8 bg-white rounded-lg max-w-xl w-full">
          <div>
            header title
          </div>
          <div class="border-y">
            body
          </div>
          <div>
            footer
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>