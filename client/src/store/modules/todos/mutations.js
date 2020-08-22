export default {
  setTodosState (state, payload) {
    state[payload.property] = payload.value
  }
}
