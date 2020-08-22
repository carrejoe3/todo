<template>
  <div class="home">
    <Toolbar />
    <TodoInput />
  </div>
</template>

<script>

import Toolbar from '@/components/Toolbar'
import TodoInput from '@/components/TodoInput'

export default {
  name: 'Home',
  components: {
    Toolbar,
    TodoInput
  }
}

</script>
