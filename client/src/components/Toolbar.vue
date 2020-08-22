<template>
  <v-toolbar color="white">
    <Logo />
    <v-spacer></v-spacer>
    <v-toolbar-title id="titleText">
      <strong>Todo: {{ tasks.length }} items</strong>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>

import Logo from '@/components/Logo'

export default {
  name: 'Toolbar',
  components: {
    Logo
  },
  computed: {
    tasks () {
      return this.$store.state.todos.tasks
    }
  }
}

</script>

<style lang="scss">
#titleText {
  color: #f09;
}
</style>
