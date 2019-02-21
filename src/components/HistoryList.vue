<template>
    <div class="readers">
        <h4>Leitores recentes:</h4>
        <div v-for="(el, index) in items" :key="index">
        <p class="readers__name"><strong><a :href="el.hostname">{{ el.reader }}:</a></strong></p>
        <div class="readers__manga" v-for="(el_manga, index_mangas) in el.mangas" :key="index_mangas">
            <p>&nbsp;&nbsp;<strong>{{ el_manga.name }}</strong>
            <br>
            <a class="readers__manga__cap" v-for="(el_caps, index_caps) in el_manga.history" :key="index_caps" :href="el_caps.url">
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Cap:</strong> {{ el_caps.cap }}
                <br>
            </a>
            </p>
        </div>
        </div>
    </div>
</template>

<script>
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
.readers {
  color: aliceblue;
}
.readers__manga__cap {
  text-decoration: none;
  color: darkorange;
}
</style>
