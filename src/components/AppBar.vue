<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <v-app-bar
    density="compact"
    flat
    color="transparent"
  >
    <v-app-bar-title>
      <div
        class="cursor-pointer"
        @click="router.push('/')"
      >
        JN
      </div>
    </v-app-bar-title>
    <template #append>
      <v-btn
        variant="plain"
        text="Projects"
        to="/projects"
        class="custom-transform-class text-none"
      />

      <!-- <v-btn
        size="small"
        icon="mdi-application-outline"
        to="/demos"
      /> -->
      <v-btn
        size="small"
        icon="mdi-github"
        href="https://github.com/jeffnawroth"
        variant="plain"
      />
      <v-btn
        size="small"
        icon="mdi-translate"
        variant="plain"
      />

      <v-btn
        size="small"
        icon="mdi-theme-light-dark"
        variant="plain"
      />
    </template>
  </v-app-bar>
</template>
