<template>
  <v-container style="max-width: 500px" class="mt-15">
    <v-text-field
      v-model="task"
      label="What are you working on?"
      solo
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
  methods: {
    createTodo () {
    }
  }
}

</script>
