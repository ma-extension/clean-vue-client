<template>
    <div class="readers">
        <!-- <h4 class="readers__header">Leituras recentes:</h4> -->
        <!-- <div class="reader">
            <div class="reader__item">
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
        </div>
        <div class="reader">
            <div class="reader__item">
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
            </div>
        </div> -->
        
        <div class="reader">
            <div class="reader__item" v-for="(el, index) in history" :key="index">
                <p @click="(e) => readerCollapse(e)" class="reader__name"><strong><a :href="el.hostname">{{ el.reader }}</a></strong></p>
                <div class="reader__mangas">
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
    </div>
</template>

<script>
import utils from '../utils'

export default {
    props: [
        'showHistoryFrom'
    ],
  data () {
    return {
      items: [],
      current_hostname: null
    }
  },
  mounted () {
      utils.hostname().then(url => {
        this.current_hostname = url
        
        console.log(this.showHistoryFrom)
        console.log(this.current_hostname)

        this.getLastReaders().then(resp => {
            this.items = resp
        })
    })
  },
  computed: {
      history () {
          let readers = this.items
          if (this.showHistoryFrom === 'current') {
              readers = this.items.filter(el => {
                  return (el.hostname === this.current_hostname)
              })
          }
          return readers
      }
  },
  methods: {
    readerCollapse (value) {
        // GET the body of the current READER, and changes your display
        let reader = value.target.parentElement.querySelector('.reader__mangas')
        if (reader.style.display === '') {
           reader.style.display = 'none'
        } else {
           reader.style.display = ''
        }
    },
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
  user-select: none;
}
.readers__header {
    padding: 10px;
    background: chocolate;
    color: azure;
    text-align: center;
}
.reader__mangas {
    transition: 0.3s ease;
}

.reader__item {
    color: rgb(34, 34, 34);
    margin-bottom: 10px;
    background: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(59, 59, 59, 0.335);
}

.reader__item:hover {
  box-shadow: 1px 1px 5px rgba(223, 223, 223, 0.342);
    margin-bottom: 10px;
    /* background: rgba(128, 128, 128, 0.205); */
}

.reader__name:hover {
    color: azure;
    background: rgb(255, 81, 0);
}
.reader__name {
    font-size: 16px;
    font-weight: bold;
    padding: 15px 0px 15px 0px;
    color: rgb(255, 81, 0);

    text-decoration: none;
    text-align: center;
    transition: .3s ease;
}
.reader__name a {
    text-decoration: none;
    color: currentColor;
}
.reader__manga {
    margin: 5px;
}
.reader__manga__name {
    /* background: rgba(128, 128, 128, 0.205); */
    padding: 5px;
    border-bottom: 1px solid rgba(59, 59, 59, 0.335);
}
.reader__manga__name:hover {
    background: rgba(128, 128, 128, 0.205);
}

.reader__manga__cap {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* color: rgb(54, 54, 54); */
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
    color: azure;
    font-size: 15px;
}

.reader__manga__cap__button:hover {
    margin: -1px;
    border: 1px solid rgba(255, 255, 255, 0.486);
}
</style>
