<script setup lang="ts">
const karboard = useKarboard()
</script>

<template>
  <footer>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="py-8 md:py-12">

        <div class="flex flex-col items-center md:flex-row md:justify-between justify-center gap-4 mb-4">
          <AppLogo />
          <ul class="flex gap-4">
            <li v-for="item of karboard.socials">
              <NuxtLink
                :to="item.to"
                target="_blank"
                :title="item.label"
                class="flex items-center justify-center text-gray-500 hover:text-green-500 transition-all duration-300"
              >
                <Icon :name="item.icon" />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="text-center md:flex md:items-center md:justify-between pt-6 border-t">
          <div class="mb-2 text-sm font-medium md:order-1 md:mb-0">
            <ul class="inline-flex flex-wrap text-sm font-medium">
              <li class="after:content-['·'] after:px-2 after:text-gray-300 last:after:hidden">
                <!-- todo: dynamic -->
                <NuxtLink class="text-gray-500 hover:underline" to="/privacy-policy">
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="text-sm text-gray-500">
            © {{ new Date().getFullYear() }}
            <NuxtLink :to="karboard.copyright">
              {{ karboard.name }}
            </NuxtLink>
            | All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
