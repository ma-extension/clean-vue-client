<template>
    <div class="container">
        <div class="title">
          <h1>Manga Agenda</h1>
        </div>
        <HistoryList />
        <br>
        <div class="help">
          <p>Oops, este site não é suportado como um leitor gerenciavel.</p>
          <a href="#">Ajuda</a>
        </div>
    </div>
</template>

<script>
import HistoryList from '@/components/HistoryList.vue'
export default {
  components: {
    HistoryList
  },
  data () {
    return {
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

</style>

