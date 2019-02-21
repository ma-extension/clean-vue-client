<template>
    <div class="readers">
        <h4>Leituras recentes:</h4>
        <!-- <div class="reader">
            <p class="reader__name">central-de-mangas</p>
            <div class="reader__manga">
                <div class="reader__manga__name">
                    <strong>One Piece</strong>
                </div>
                <div class="reader__manga__cap">
                    <a href="">Cap: 900</a>
                    <div>
                        <img class="reader__manga__cap__button" @mousedown="(e) => onDeleteButton(e)" @mouseup="e => onDeleteButton(e)" 
                        src="../assets/baseline-delete-24px.svg" alt="thrash button">
                    </div>
                </div>
                <div class="reader__manga__cap">
                    <a href="">Cap: 899</a>
                    <div>
                        <img class="reader__manga__cap__button" @mousedown="(e) => onDeleteButton(e)" @mouseup="e => onDeleteButton(e)" 
                        src="../assets/baseline-delete-24px.svg" alt="thrash button">
                    </div>
                </div>
            </div>
        </div>
        <div class="reader">
            <p class="reader__name" @click="onShowReaderMangas()">central-de-mangas</p>
            <div class="reader__manga">
                <div class="reader__manga__name">
                    <strong>One Piece</strong>
                </div>
                <div class="reader__manga__cap">
                    <a href="">Cap: 900</a>
                    <div>
                        <img class="reader__manga__cap__button" @mousedown="(e) => onDeleteButton(e)" @mouseup="e => onDeleteButton(e)" 
                        src="../assets/baseline-delete-24px.svg" alt="thrash button">
                    </div>
                </div>
                <div class="reader__manga__cap">
                    <a href="">Cap: 899</a>
                    <div>
                        <img class="reader__manga__cap__button" @mousedown="(e) => onDeleteButton(e)" @mouseup="e => onDeleteButton(e)" 
                        src="../assets/baseline-delete-24px.svg" alt="thrash button">
                    </div>
                </div>
            </div>
        </div> -->
        <div class="reader">
            <div class="reader__item" v-for="(el, index) in items" :key="index">
                <p class="reader__name"><strong><a :href="el.hostname">{{ el.reader }}</a></strong></p>
                <div class="reader__manga" v-for="(el_manga, index_mangas) in el.mangas" :key="index_mangas">
                    <div class="reader__manga__name">
                        <strong>{{ el_manga.name }}</strong>
                    </div>
                    <div class="reader__manga__cap" v-for="(el_caps, index_caps) in el_manga.history" :key="index_caps">
                        <a :href="el_caps.url">Capítulo {{ el_caps.cap }}</a>
                        <div>
                            <img
                                class="reader__manga__cap__button" @mousedown="(e) => onDeleteButton(e)" @mouseup="e => onDeleteButton(e)" 
                                src="../assets/baseline-delete-24px.svg" alt="thrash button">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: null,
      showReaderMangas: ''
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
    },
    onDeleteButton (element) {
        let border = element.target.style.border
        if (element.type === 'mousedown') {
            element.target.style.borderTop='none'
            element.target.style.borderLeft='none'    
            element.target.style.marginTop = '0px'
            element.target.style.backgroundColor = 'rgb(0,0,0,0.3)'
        } else if (element.type === 'mouseup') {
            element.target.style.backgroundColor = 'transparent'
            element.target.style.marginTop = '-1px'
            element.target.style.border=border
        }
    }
  }
}
</script>

<style>
.readers {
    /* margin: 5px; */
    /* background: #4C4A48;  */
  /* color: azure; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
}
.reader {
  /* box-shadow: 0px 2px 5px rgba(59, 59, 59, 0.342); */
}

.reader__item {
    margin-bottom: 10px;
    background: rgba(128, 128, 128, 0.075);
    border-bottom: 1px solid rgba(59, 59, 59, 0.335);
}

.reader__item:hover {
  box-shadow: 0px 1px 5px rgb(223, 223, 223);
    margin-bottom: 10px;
    /* background: rgba(128, 128, 128, 0.205); */
}

.reader__name:hover {
    background: rgba(128, 128, 128, 0.205);
}
.reader__name {
    /* background: rgba(128, 128, 128, 0.205); */
    font-size: 16px;
    font-weight: bold;
    padding: 15px 0px 15px 0px;

    text-decoration: none;
    color: currentColor;
    text-align: center;
}
.reader__name a {
    text-decoration: none;
    color: currentColor;
}
.reader__manga {
    margin: 5px;
}
.reader__manga__name {
    padding: 5px;
    border-bottom: 1px solid rgba(59, 59, 59, 0.335);
}
.reader__manga__name:hover {
    background: rgba(128, 128, 128, 0.205);
}

.reader__manga__cap {
    text-decoration: none;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.reader__manga__cap a{
    flex: 1;
    text-decoration: none;
    color: currentColor;
    width: 100px;

    transition: 0.5s ease;
}

.reader__manga__cap:hover {
    /* color: azure; */
    background-color: #3DB9CC;
    font-size: 15px;
}

.reader__manga__cap__button:hover {
    margin: -1px;
    border: 1px solid rgba(255, 255, 255, 0.486);
}
.readers__manga__cap {
  text-decoration: none;
  color: darkorange;
}
</style>
