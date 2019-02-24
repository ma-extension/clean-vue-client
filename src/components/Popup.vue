<template>
  <div>
    <!-- <Banner /> -->
    <div
      class="container">
      <div class="popup__title">
        <p>Recentemente lidos</p>
      </div>
      <HistoryList showHistoryFrom="current"/>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import utils from '../utils'
import HistoryList from '../components/HistoryList.vue'
export default {
  components: {
    HistoryList,
    Banner
  },
  data () {
    return {
      url: '',
      hostname: null
    }
  }
}
</script>

<style scoped lang="css">
.popup__title {
  font-weight: bold;
  margin-bottom: 15px;
  /* color: rgb(8, 131, 125); */
  font-style: italic;
}
.container {
  color: rgb(47, 47, 47);
  padding: 15px;
  text-align: center;
  background: rgb(238, 238, 238);
}

</style>
