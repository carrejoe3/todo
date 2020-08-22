<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style lang="scss">

body {
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  overflow: hidden;
}

</style>
