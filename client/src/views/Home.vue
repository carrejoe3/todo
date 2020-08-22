<template>
  <div class="home">
    <Toolbar />
    <TodoInput />
    <List />
  </div>
</template>

<script>

import Toolbar from '@/components/Toolbar'
import TodoInput from '@/components/TodoInput'
import List from '@/components/TodoList'

export default {
  name: 'Home',
  components: {
    Toolbar,
    TodoInput,
    List
  }
}

</script>
