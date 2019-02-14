<template>
  <div>
    <Banner />
    <div
      class="container">
      <p>Você parou em:</p>
      <h1 class="title">{{ reader.last_manga.name }}, Cap: {{ reader.last_manga.cap }}</h1>
      <p>Em: <a :href="reader.last_manga.url" @click.native="gotoRoot()">{{ reader.last_manga.url }}</a></p>
      <p class="subtitle">Histórico de leitura:</p>
      <div v-for="(current, index) in lastMangaHistory()" :key="index">
        <p>{{ reader.last_manga.name}}, {{ current.cap }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import utils from '../utils'
import history from '../history.json'

export default {
  components: {
    Banner
  },
  data () {
    return {
      url: '',
      reader: null
    }
  },
  computed: {
    hostname () {
      return utils.url_domain(this.url)
    },
    // reader () {
    //   utils.current_reader().then(resp => {
    //     return resp
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  },
  methods: {
    gotoRoot () {
      chrome.tabs.update(null, {url: 'https://'+this.hostname})
    },
    lastMangaHistory () {
      return this.reader.mangas.filter((element) => {
        return element.name === this.reader.last_manga.name
      })[0].history
    }
  },
  mounted () {
    utils.current_reader().then(resp => {
        this.reader = resp
      }).catch(err => {
        console.log(err)
      })

    utils.current_url().then((url) => {
      this.url = url
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
