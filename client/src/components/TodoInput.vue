<template>
  <v-container>
    <v-text-field
      v-model="task"
      label="What are you working on?"
      @keydown.enter="createTodo"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon
            v-if="task"
            @click="createTodo"
          >
            mdi-plus-circle
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>
  </v-container>
</template>

<script>

export default {
  name: 'TodoInput',
  data: () => ({
    task: null
  }),
  computed: {
    tasks: {
      get () {
        return this.$store.state.todos.tasks
      },
      set (value) {
        this.$store.commit('setTodosState', { property: 'tasks', value: value })
      }
    }
  },
  methods: {
    createTodo () {
      this.tasks.push({
        done: false,
        title: this.task
      })

      this.task = null
    }
  }
}

</script>
