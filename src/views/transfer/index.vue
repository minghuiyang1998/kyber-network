<template>
  <div class="transfer-container">
    <div class="radio-container">
      <el-radio-group v-model="radio" class="radio">
        <router-link class="inlineBlock" to="/swap">
          <el-radio-button label="SWAP"></el-radio-button>
        </router-link>
        <router-link class="inlineBlock" to="/transfer">
          <el-radio-button label="TRANSFER"></el-radio-button>
        </router-link>
      </el-radio-group>
    </div>

    <div style="margin-top: 20px">
      <h1 style="text-align: center">transfer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    return {
      radio: 'TRANSFER',
    };
  }
}
</script>

<style>
h1 {
  font-size: 2.3rem;
  margin: 40px;
}
.transfer-container {
  width: 100%;
  height: 1000px;
  background-color: #f7f7f7
}
.radio-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.radio {
  margin: 50px
}
</style>
