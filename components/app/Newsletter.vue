<script setup lang="ts">
const email = ref('')

async function subscribe() {
  // todo: email validation
  await $fetch('/api/jobs/create', {
    method: 'POST',
    body: email,
  })
}
</script>

<template>
  <div class="border-b border-gray-200 py-8">
    <div class="group relative px-4 py-6 text-center rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-300">
      <div class="text-lg text-green-500">
        Land your dream job
      </div>
      <div class="mb-4 text-2xl font-bold">
        Get a weekly email updates!
      </div>
      <form @submit.prevent="subscribe" class="inline-flex max-w-sm">
        <div class="mx-auto flex flex-col justify-center sm:max-w-none sm:flex-row gap-4">
          <input v-model="email" type="email" class="border px-4 rounded-md py-2 w-full" placeholder="your@email.com" />
          <button class="rounded-lg px-4 py-2.5 text-sm whitespace-nowrap bg-green-500 text-white hover:bg-green-700" type="submit">
            Subscribe to Newsletter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>