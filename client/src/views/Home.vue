<template>
  <div class="home">
    <Toolbar />
    <TodoInput />
    <InfoBar />
    <List />
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
