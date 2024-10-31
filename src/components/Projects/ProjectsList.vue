<script setup lang="ts">
import projects from '@/projects'
</script>

<template>
  <v-row>
    <v-col
      v-for="project in projects"
      :key="project.link"
      cols="12"
      md="4"
    >
      <v-card
        class="pa-4"
        variant="plain"
        :title="project.title"
        :prepend-icon="project.icon"
        :href="project.link"
      >
        <template
          #subtitle
        >
          <div
            class="text-wrap"
          >
            {{ project.description }}
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
