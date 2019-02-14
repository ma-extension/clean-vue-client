<template>
  <div id="app">
    <Popup v-if="isReader" />
    <Error v-else />
  </div>
</template>

<script>
import utils from './utils'
import Popup from './components/Popup.vue'
import Error from './components/Error.vue'

export default {
  name: 'app',
  components: {
    Popup,
    Error
  },
  data () {
    return {
      isReader: false
    }
  },
  methods: {
    checkIsReader () {
      let ALLOWED_HOSTNAMES = [
        'onepiece-ex.com.br'
      ]
      
      utils.current_url().then((resp) => {
        let hostname = utils.url_domain(resp)

        let aux = ALLOWED_HOSTNAMES.filter((curr) => {
          return curr === hostname
        })
  
        if (aux.length > 0) {
          this.isReader = true
        }
      })
    }
  },
  mounted () {
    this.checkIsReader()
  }
}
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
body {
  width: 300px;
}
</style>
