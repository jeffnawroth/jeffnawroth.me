<template>
  <v-empty-state
    headline="404"
    title="Page not found"
    text="The page you were looking for does not exist"
    icon="mdi-alert-outline"
    action-text="Back to homepage"
    @click:action="$router.push('/')"
  >
    <template #media>
      <v-icon
        icon="mdi-alert-outline"
        color="error"
      />
    </template>
  </v-empty-state>
</template>
