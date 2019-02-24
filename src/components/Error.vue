<template>
    <div class="error">
      <div class="container">
        <!-- <div class="title">
          <h1>Manga Agenda</h1>
        </div> -->
        <HistoryList showHistoryFrom="all"/>
        <br>
      </div>
        <div class="help">
          <p>Oops, este site não é suportado como um leitor gerenciavel.</p>
          <a href="#">Ajuda</a>
        </div>
    </div>
</template>

<script>
import HistoryList from '../components/HistoryList.vue'
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
  /* background: rgb(255, 255, 255); */
  background: rgb(238, 238, 238);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container {
  padding: 16px;
}

.help {
  padding: 16px;
  color: aliceblue;
  background: rgba(0, 0, 0, 0.794);
}

</style>

