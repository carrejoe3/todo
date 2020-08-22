<template>
  <v-container style="max-width: 500px">
    <v-card v-if="tasks.length > 0" flat>
      <v-slide-y-transition class="py-0" group>
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox v-model="task.done" :color="task.done && 'grey' || 'primary'">
                <template v-slot:label>
                  <div class="ml-4" v-text="task.title"></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon v-if="task.done" color="primary">
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'TodoList',
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

  }
}

</script>
