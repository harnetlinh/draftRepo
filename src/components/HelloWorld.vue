<template>
  <div class="hello">
    <Header/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
      
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  components:{
    Header,
    Footer
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  background-color: aquamarine;
  position: absolute;
  padding: 0;
}
.container-fluid{
  width: 100vw;
}

</style>
