<script setup lang="ts">
const { title = '', subtitle = '' } = defineProps<{ title: string, subtitle: string }>()
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      class="d-flex justify-center text-h3"
    >
      {{ title }}
    </v-col>
    <v-col
      cols="12"
      class="d-flex justify-center text-subtitle-1"
    >
      {{ subtitle }}
    </v-col>
  </v-row>
</template>
