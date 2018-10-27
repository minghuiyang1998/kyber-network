<template>
  <div style="position:relative">
    <!-- <div class="dashboard-text">name:{{ name }}</div> -->
    <!-- <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div> -->
    <div style="background-color:rgb(247,183,42);height:400px; display:flex; justify-content:center; align-items:center;">
      <el-button id="button" v-if="!isMove" v-on:click="isMove = true">接受条款和协议</el-button>
    </div>
    <div id="center-boxes" style="top:isMove? " >
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data(){
    return{
      isMove:false
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods:{
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

#button{
  width:200px;
  height:70px;
}

#button:hover{
  width:220px;
}

#center-boxes{
  width:100%; 
  display:flex; 
  position:absolute; 
  flex-wrap: wrap;
  justify-content: center;
  top:70%; 
  left:0;
}

.box{
  width:180px;
  height:180px;
  background-color:#fff;
  margin:20px;
  box-shadow:0px 4px 5px 1px #ddd;
}
</style>
