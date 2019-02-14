<template>
    <div>
        <h1>Oops, este site não é suportado como um leitor gerenciavel.</h1>
        <p></p>
        <h3>Envie uma issue para: github.com</h3>
        <h3>Ou, atualize sua extensão, quem sabe já não a corrigimos.</h3>
        <p>url: {{ hostname }}</p>
    </div>
</template>

<script>
import utils from '../utils'
export default {
  data () {
    return {
      hostname: ''
    }
  },
  mounted () {
    utils.current_url().then((resp) => {
      this.hostname = resp
    })
  }
}
</script>

<style scoped lang="css">

</style>

