<template>
  <div class="home">
    <Toolbar />
    <v-card class="mx-auto mt-15" style="max-width: 500px" flat>
      <TodoInput />
      <InfoBar class="mt-10" />
      <List />
    </v-card>
  </div>
</template>

<script>

import Toolbar from '@/components/Toolbar'
import TodoInput from '@/components/TodoInput'
import InfoBar from '@/components/InfoBar'
import List from '@/components/TodoList'

export default {
  name: 'Home',
  components: {
    Toolbar,
    TodoInput,
    InfoBar,
    List
  }
}

</script>
