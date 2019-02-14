<template>
  <div class="banner">
  </div>
</template>

<script>
export default {
  data () {
    return {
        image_dir: ''
    }
  },
  mounted () {
    var banner = document.querySelector('.banner')
    this.image_dir = 'https://sm.ign.com/ign_br/screenshot/default/we-can_213n.jpg'
  banner.style.backgroundImage = `url('${this.image_dir}')`
  } 
}
</script>

<style scoped lang="css">
.banner {
  height: 80px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
