<template>
    <div class="container">
        <div class="title">
          <h1>Manga Agenda</h1>
        </div>
        <div class="readers">
          <h4>Leitores recentes:</h4>
          <div v-for="(el, index) in items" :key="index">
            <p class="readers__name"><strong>{{ el.reader }}:</strong></p>
            <div v-for="(el_manga, index_mangas) in el.mangas" :key="index_mangas">
              <p>&nbsp;&nbsp;<strong>{{ el_manga.name }}</strong>
                <br>
                <a v-for="(el_caps, index_caps) in el_manga.history" :key="index_caps">
                  &nbsp;&nbsp;&nbsp;&nbsp;<strong>Cap:</strong> {{ el_caps.cap }}
                  <br>
                </a>
              </p>
            </div>
          </div>
        </div>
        <br>
        <div class="help">
          <p>Oops, este site não é suportado como um leitor gerenciavel.</p>
          <a href="#">Ajuda</a>
        </div>
    </div>
</template>

<script>
import utils from '../utils'
export default {
  data () {
    return {
      items: null
    }
  },
  mounted () {
    this.getLastReaders().then(resp => {
      this.items = resp
    })
  },
  methods: {
    getLastReaders () {
      return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['historyReaders'], function(items) {
          resolve(items.historyReaders)
        })
      })
    }
  }
}
</script>

<style scoped lang="css">
.container {
  /* background configs */
  /* background-image: url('../assets/galaxy_background.jpg'); */
  background: rgba(0, 0, 0, 0.8);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container {
  padding: 16px;
}

.title {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  text-shadow: 1px 1px 5px black;
  color: aliceblue;
}

.help {
  color: aliceblue;
}

.readers {
  color: aliceblue;
}
</style>

