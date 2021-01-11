<template>
  <div class="header">
      <div class="row">
        <div class="col-lg-1 col-sm red" >
          Header
        </div>
        <div class="col-lg-11 col-sm black" style="text-align:right">
          <b-button>home</b-button>
          <b-button>album</b-button>
          <b-button>Tour</b-button>
          <b-button>Insta</b-button>
          <b-button>Facebook</b-button>
          <b-button>youtube</b-button>
        </div>

      </div>
    </div>
</template>

<script>
export default {
    name:"header"
}
</script>

<style lang="css" scoped>
.header {
  width: 100%;
  background-color: aquamarine;
  position: absolute;
  padding: 0;
}
.red {
  background-color: red;
}
.black{
  background-color: orange;
}
</style>>
