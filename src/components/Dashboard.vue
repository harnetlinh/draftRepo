<template>
  <div class="content">
      <br>
      <br>
      {{ nameMUSIC }}
    <iframe width="420" height="345" :src="currentSrc">
    </iframe>
    <b-list-group v-for="(item,index) in playlist" :key="index">
        <b-list-group-item @click="onClickBtn(item.name, item.src)"> {{ item.name }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {

    data(){
        return{
            nameMUSIC:"",
            currentSrc:"",
            playlist:[
                {
                    name:'BƯỚC CHÂN THEO ÁNH MẶT TRỜI',
                    src:'https://www.youtube.com/embed/tgbNymZ7vqY'
                },
                {
                    name:'CÔNG CHÚA MONONOKE',
                    src:'https://www.youtube.com/embed/tgbNymZ7vqY'
                }
            ]
        }
    },
    methods:{
        onClickBtn(name,src){
            console.log("HERE")
            console.log(this.playlist[0]);
            this.currentSrc = src;
            this.nameMUSIC = name;
        }
    }
}
</script>

<style>
.content{
  height: 600px;
  width: 100%;
  background-color: bisque;
}
</style>