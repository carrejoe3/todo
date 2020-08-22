<template>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>
      Todos: {{ tasks.length }} items
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>

export default {
  name: 'Toolbar',
  computed: {
    tasks () {
      return this.$store.state.todos.tasks
    }
  }
}

</script>
