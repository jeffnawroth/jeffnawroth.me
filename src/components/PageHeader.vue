<script setup lang="ts">
const { title = '', subtitle = '' } = defineProps<{ title: string, subtitle: string }>()
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      class="d-flex justify-center text-h4 font-weight-black"
    >
      {{ title }}
    </v-col>
    <v-col
      cols="12"
      class="d-flex justify-center text-subtitle-1 text-medium-emphasis "
    >
      {{ subtitle }}
    </v-col>
  </v-row>
</template>
