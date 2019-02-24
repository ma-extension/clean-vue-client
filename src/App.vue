<template>
  <div id="app">
      <div class="title">
        <h1>Manga Agenda</h1>
      </div>
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
      // this.isReader = true
      utils.current_url().then((resp) => {
        let hostname = utils.url_domain(resp)

        let aux = utils.READERS.filter((curr) => {
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body {
  width: 300px;
}
.title {
  text-align: center;
  background-color: brown;
  padding: 5px;
  color: azure;
  font-style: italic;
}
</style>
