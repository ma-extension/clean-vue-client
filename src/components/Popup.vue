<template>
  <div>
    <Banner />
    <div
      class="container">
      <h1 class="title">{{ manga.name }}, Cap: {{ manga.cap }}</h1>
      <p>Em: <a :href="hostname">{{ hostname }}</a></p>
      <p class="subtitle">Histórico de leitura:</p>
      <p @click="gotoRoot()">atual url: {{ hostname }}</p>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import utils from '../utils'

export default {
  components: {
    Banner
  },
  data () {
    return {
      url: '',
      manga: {
        name: '',
        cap: '',
        origin: ''  
      }
    }
  },
  computed: {
    hostname () {
      return utils.url_domain(this.url)
    }
  },
  methods: {
    gotoRoot () {
      chrome.tabs.update(null, {url: 'https://'+this.hostname})
    },
    loadCurrentManga () {
      this.manga.name = 'One Piece'
      this.manga.cap = '500'
      this.manga.origin = this.hostname
    }
  },
  mounted () {
    this.loadCurrentManga()

    utils.current_url().then((resp) => {
      this.url = resp
    })
  }
}
</script>

<style scoped lang="css">
.container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(47, 47, 47);
  text-shadow: 1px 1px 1px rgb(180, 180, 180);
  padding: 15px;
  text-align: center;
}

</style>
