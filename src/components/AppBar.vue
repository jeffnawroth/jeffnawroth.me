<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useTheme } from 'vuetify'

const router = useRouter()

const theme = useTheme()

const defaultTheme = 'dark'
const storageTheme = useStorage('theme', defaultTheme)

const themeIcon = computed(() => {
  return theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
})

onMounted(() => {
  setVuetifyTheme()
})

function toggleTheme() {
  storageTheme.value = theme.global.current.value.dark ? 'light' : 'dark'
  setVuetifyTheme()
}

function setVuetifyTheme() {
  theme.global.name.value = storageTheme.value
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  storageTheme.value = event.matches ? 'dark' : 'light'
})

watch(storageTheme, () => {
  setVuetifyTheme()
})
</script>

<template>
  <v-app-bar
    density="compact"
    flat
    color="transparent"
  >
    <template #prepend>
      <v-avatar
        size="x-large"
        class="cursor-pointer"
        alt="JN"
        @click="router.push('/')"
      >
        <v-img
          src="@/assets/favicon-96x96.png"
        />
      </v-avatar>
    </template>

    <template #append>
      <v-btn
        variant="plain"
        text="Projects"
        to="/projects"
        class="custom-transform-class text-none"
      />

      <v-btn
        size="small"
        icon="mdi-github"
        href="https://github.com/jeffnawroth"
        variant="plain"
      />

      <v-btn
        size="small"
        :icon="themeIcon"
        variant="plain"
        @click="toggleTheme"
      />
    </template>
  </v-app-bar>
</template>
