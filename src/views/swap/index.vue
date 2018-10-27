<template>
  <div >
    <div class="container">
      <el-radio-group v-model="radio" class="redio">
        <router-link class="inlineBlock" to="/swap">
          <el-radio-button label="SWAP"></el-radio-button>
        </router-link>
        <router-link class="inlineBlock" to="/transfer">
          <el-radio-button label="TRANSFER"></el-radio-button>
        </router-link>
      </el-radio-group>
    </div>
    <h1 style="text-align: center">swap</h1>
  </div>
</template>

<script>
export default {
  name: 'Swap',
  data () {
    return {
      radio: 'SWAP',
    };
  }
}
</script>

<style>
h1 {
  font-size: 2.3rem;
  margin: 40px;
}
.app-main {
  background-color: #f7f7f7
}
.container {
  display: flex;
  justify-content: center;
}
.redio {
  margin: 50px
}
</style>
