<template>
  <img id="logo" :src="mySVG" alt="Igloo Energy" />
</template>

<script>

export default {
  name: 'Logo',
  data: () => ({
    mySVG: require('../assets/logo.svg')
  })
}

</script>

<style lang="scss" scoped>
  #logo {
    width: 120px;
  }
</style>
