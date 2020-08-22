<template>
  <v-container class="d-flex" style="max-width: 500px">
    <strong class="mx-4 info--text text--darken-2">
      Remaining: {{ remainingTasks }}
    </strong>

    <v-divider vertical></v-divider>

    <strong class="mx-4 success--text text--darken-2">
      Completed: {{ completedTasks }}
    </strong>

    <v-spacer></v-spacer>

    <v-progress-circular
      :value="progress"
      class="mr-2"
    ></v-progress-circular>
  </v-container>
</template>

<script>

export default {
  name: 'InfoBar',
  computed: {
    tasks () {
      return this.$store.state.todos.tasks
    },
    completedTasks () {
      return this.tasks.filter(task => task.done).length
    },
    progress () {
      return this.completedTasks / this.tasks.length * 100
    },
    remainingTasks () {
      return this.tasks.length - this.completedTasks
    }
  }
}

</script>
