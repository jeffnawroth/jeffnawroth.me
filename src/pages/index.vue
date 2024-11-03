<route lang="yaml">
  meta:
    layout: home
  </route>

<script lang="ts" setup>
//
</script>

<template>
  <p class="text-h4 font-weight-black">
    Jeff Nawroth
  </p>

  <p>
    Hi, I am Jeff Nawroth, a master’s student in <em>Business Informatics</em> and a web developer from Germany.
  </p>

  <p>
    I am currently working on

    <v-chip
      label
      href="https://github.com/jeffnawroth/source-taster"
      variant="text"
      :draggable="false"
    >
      <v-avatar
        start
        tile
      >
        <v-img
          src="/src/assets/icon128.png"
        />
      </v-avatar>
      The Source Taster
    </v-chip>

    as part of my master’s thesis. It is a Chrome extension designed to make it easier for students to verify the existence of literature sources.
  </p>

  <p>
    Outside of programming and studying, I enjoy going to the gym, running marathons, and training for triathlons.
  </p>
</template>

<style>
p {
    margin: 1.5em 0;
}
</style>
