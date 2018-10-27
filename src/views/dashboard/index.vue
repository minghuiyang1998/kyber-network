<template>
  <div >
    <!-- <div class="dashboard-text">name:{{ name }}</div> -->
    <!-- <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div> -->
    <div id="container" style="position:relative;background-color:rgb(0,188,150);">
      <div style="padding:60px 0 20px;text-align:center;font-size: 42px;color:#fff;">即时而安全的代币间兑换</div>
      <div style="padding-bottom:40px;text-align:center;font-size: 36px;color:#fff;">无需订单，无需充值，无需包装</div>
      <el-button id="button" v-if="!isMove" v-on:click="onAcceptButtonTap">接受条款和协议</el-button>
    </div>
    <div id="center-boxes" :style="{transform}" >
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
      isMove:false,
      transform: 'translateY(40%)'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods:{
    onAcceptButtonTap(){
      this.isMove = true;
      this.transform = 'translateY(0)'
    }
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

#container{
  background-repeat: no-repeat;
  background-size:100%;
  height:540px; 
}

#button{
  display: block;
    width: 180px;
    height: 58px;
    background: #fff;
    color: #00c69a;
    font-weight: 600;
    font-size: 18px;
    margin: 0 auto;
    border-radius: 40px;
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
  top:30%;
  transition:transform 2s;
  left:0;
}

.box{
  width:180px;
  height:180px;
  background-color:#fff;
  margin:20px;
  opacity: 0.5;
  border-radius: 20px;
  box-shadow:0px 1px 4px 1px rgba(28,28,28,0.2);
}
</style>
