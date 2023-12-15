<script setup lang="ts">
import { computedAsync } from '@vueuse/core'

import type { Job } from '../types'
import { slugify } from '../utils'

const route = useRoute()
const router = useRouter()
const karboard = useKarboard()

const { data } = await useFetch<Job[]>(karboard.value.api.jobs)

const types = computedAsync(() => {
  const allBadges = data.value?.flatMap(job => job.badges) || []
  return [...new Set(allBadges)]
})

const filtered = computed(() => {
  return !queries.types.length ? data.value : data.value?.filter((item) => {
    const badges = item.badges.map(slugify)
    return queries.types.some(type => badges.includes(type))
  })
})

const queries = reactive({
  types: [] as string[],
})

function selectType(event: Event) {
  const val = (event.target as HTMLInputElement).value
  const index = queries.types.indexOf(val)
  if (index !== -1) {
      queries.types.splice(index, 1)
    } else {
      queries.types.push(val)
    }
}

watch(queries, () => {
  router.push({
    name: 'index',
    query: queries,
  })
})

onMounted(() => {
  if (route.query.types) {
    if (typeof route.query.types === 'string') {
      queries.types.push(route.query.types)
    } else {
      queries.types.push(...route.query.types as any)
    }
  }
})

function clearQueries() {
  queries.types = []
}

useSeoMeta({
  title: 'Home',
})
</script>

<template>
  <section class="relative overflow-hidden">

    <div class="pointer-events-none absolute -z-10 hidden md:block" aria-hidden="true">
      <svg width="1440" height="749" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="a"><stop stop-color="#6366F1" offset="0%"/><stop stop-color="#6366F1" stop-opacity="0" offset="100%"/></linearGradient><linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="c"><stop stop-color="#14B8A6" offset="0%"/><stop stop-color="#14B8A6" stop-opacity="0" offset="100%"/></linearGradient><linearGradient x1="9.488%" y1="37.276%" x2="100%" y2="37.276%" id="e"><stop stop-color="#0EA5E9" offset="0%"/><stop stop-color="#0EA5E9" stop-opacity="0" offset="100%"/></linearGradient><filter x="-23.7%" y="-185.4%" width="147.3%" height="470.7%" filterUnits="objectBoundingBox" id="b"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter><filter x="-23.7%" y="-185.4%" width="147.3%" height="470.7%" filterUnits="objectBoundingBox" id="d"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter><filter x="-23.7%" y="-185.4%" width="147.3%" height="470.7%" filterUnits="objectBoundingBox" id="f"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><path fill="url(#a)" filter="url(#b)" transform="rotate(-20 199.62 93.344)" d="M221.284 106.384 185.95 185.7l598.833 1.605 35.334-79.316z"/><path fill="url(#c)" filter="url(#d)" transform="rotate(-20 548.62 102.27)" d="m570.284 115.309-35.334 79.316 598.833 1.605 35.334-79.316z"/><path fill="url(#e)" filter="url(#f)" transform="rotate(-20 577.62 547.528)" d="m599.284 560.567-35.334 79.316 598.833 1.605 35.334-79.316z"/></g></svg>
    </div>

    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="flex flex-col md:flex-row text-center justify-between pb-8 pt-28 md:pb-16 pt-36">

        <div class="max-w-3xl md:text-left text-center">
          <template v-if="karboard.hero">
            <h1 v-html="karboard.hero.title" class="text-6xl font-extrabold mb-6" />
            <p v-html="karboard.hero.description" class="mb-8 text-xl text-gray-500 max-w-2xl" />
            <div v-if="karboard.hero.links" class="sm:flex sm:items-center sm:justify-center md:justify-start gap-4">
              <AppLink v-for="item of karboard.hero.links" :item="item" class="rounded-full px-4 py-2.5 text-sm bg-green-500 text-white hover:bg-green-700" />
            </div>
          </template>
        </div>

        <div class="flex justify-center">
          <img
            v-if="karboard.hero.image"
            :src="karboard.hero.image.src"
            :class="karboard.hero.image.class"
            :alt="karboard.hero.title"
            class="w-48 h-48"
          />
        </div>

      </div>
    </div>
  </section>

  <AppCompanies v-if="karboard.hero.logos" :logos="karboard.hero.logos" />

  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="py-8 md:py-16">
        <div class="md:flex md:justify-between">

          <aside class="mb-8 md:order-1 md:mb-0 md:ml-12 md:w-64 md:shrink-0">
            <div class="sticky top-24">

              <div class="relative rounded-xl border border-gray-200 text-gray-50 p-5">

                <div class="absolute right-6 leading-none">
                  <button class="text-sm font-medium text-green-500 hover:underline" @click="clearQueries">
                    Clear
                  </button>
                </div>

                <aside>
                  <div class="py-4 border-b last:border-none first:pt-0 last:pb-0">
                    <div class="mb-3 text-sm font-semibold text-gray-800">Job Type</div>
                    <ul>
                      <li>
                        <label v-for="item of types" :key="item" class="flex items-center">
                          <input
                            type="checkbox" 
                            :value="slugify(item)"
                            :checked="queries.types.includes(slugify(item))"
                            @input="event => selectType(event)"
                          >
                          <span class="ml-2 text-sm text-gray-600">
                            {{ item }}
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>

            </div>
          </aside>

          <div class="grow">

            <div id="jobs">
              <div class="flex items-center justify-between">
                <h2 class="text-3xl font-bold">
                  Jobs
                </h2>
                <span class="text-xs text-gray-500">
                  Showing <strong>{{ filtered?.length }}</strong> out of <strong>{{ data?.length }}</strong>
                </span>
              </div>
              <div class="flex flex-col">
                
                <AppCard v-for="item of filtered" :key="`${item.company}-${item.slug}`" :item="item" />

                <AppNewsletter />

              </div>
            </div>

            <!-- todo: Testimonials -->

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
