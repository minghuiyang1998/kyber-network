<template>
  <div class="swap-container">
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

    <div class="container" style="margin-top: 20px;">
      <div class="left-container" style="margin:10px;">
        <div>钱包地址</div>
        <p style="font-size:14px;widht:80px;text-overflow:ellipsis;overflow:hidden;color:gray">{{walletAddress}}</p>
        <div>我的余额</div>
        <el-radio-group v-model="radio2" class="check-box" @change="radioChange">
          <el-radio v-for="(value,index) in coins" :label="index" class="check-item" style="margin-left:0px;">{{value}}
            <div style="font-size:12px">{{balance[index]}}</div>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="right-container" style="margin-left:5px;">
        <div style="margin:10px;">Swap</div>
        <div style="display:flex;flex-direction:row;margin:10px;">
          <div>
            <div style="margin:5px;">From</div>
            <el-select v-model="select_value" placeholder="请选择" @change="fromSelect">
              <el-option v-for="(value,index) in coins" :key="value" :label="value" :value="value">
              </el-option>
            </el-select>
            <el-input v-model="input_balance" placeholder="0" class="balance_input" style="width:195px;border:0;margin-top:20px;">
              <template slot="append">{{select_value}}</template>
            </el-input>
            <div style="margin-top:10px;">
              钱包余额
            </div>
            <div>
              <span style="font-size:14px;color:gray">点击交换所有余额</span> 
              <el-button round style="padding:3px 10px;color:#ed8223;background-color:#e2e2e2" @click="balanceClick">{{balance[select_index]}}</el-button>
            </div>
          </div>
          <div>
            <div style="margin:5px;">To</div>
            <el-select v-model="to_select_value" placeholder="请选择" @change="toSelect">
              <el-option v-for="(value,index) in coins" :key="value" :label="value" :value="value">
              </el-option>
            </el-select>
            <el-input v-model="to_input_balance" placeholder="0" class="balance_input" style="width:195px;border:0;margin-top:20px;">
              <template slot="append">{{to_select_value}}</template>
            </el-input>
            
          </div>
        </div>
        <div style="margin-top:20px;width:100%;display:flex;justify-content: center;align-content: center;">
          <el-button style="background-color:#ed8223;color:white">Swap</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Swap',
  data() {
    return {
      radio: 'SWAP',
      walletAddress: "0x945d8b6499F4E1f01C67D8a541478D6517343845",
      radio2: 0,
      coins: ["ETH", "YMHC", "ABC"],
      balance: [1.001, 2, 3],
      objects: [{ "name": "ETH", "balance": 0.111 }],
      select_value: "ETH",
      select_index: 0,
      input_balance: "",
      to_select_value:"",
      to_select_index:"",
      to_input_balance:""
    };
  },
  methods: {
    fromSelect(value) {
      console.log(value);
      var index = this.coins.indexOf(value)
      console.log(index);
      this.select_index = index
      this.radio2 = index
      this.input_balance = 0
    },
    balanceClick() {
      this.input_balance = this.balance[this.select_index]
    },
    radioChange(value) {
      console.log(value)
      this.select_index = value;
      this.select_value = this.coins[value];
      this.input_balance = 0
    },
    toSelect(value){
      console.log(value)
      var index = this.coins.indexOf(value)
      this.to_select_index = index
      
    }
  }

}
</script>

<style>
h1 {
  font-size: 2.3rem;
  margin: 40px;
}

.swap-container {
  width: 100%;
  height: 1000px;
  background-color: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}

.radio-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.radio {
  margin: 50px
}

.container {
  display: flex;
  flex-direction: row;
  width: 70%;
  background-color: white;
  margin: 0;
}

.left-container {
  display: inline-flex;
  flex-direction: column;
  width: 30%
}

.right-container {
  display: inline-flex;
  flex-direction: column;
  width: 60%
}

.check-box {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.check-item {
  margin-left: 0px;
  margin-top: 10px;
  display: flex;
  align-content: center;
  border: 1px solid #e2e2e2;
  padding: 10px;
  width: 130px;
  border-radius: 30px;
  box-shadow: 1px black;
}

.check-item.is-checked {
  border: 1px solid #ed8223;
}

.el-radio__inner {
  margin-top: 7px;
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: #ed8223;
  background: #ed8223;
}

.el-radio__input.is-checked+.el-radio__label {
  color: #ed8223;
}

.el-select .el-input.is-focus .el-input__inner {
  color: #ed8223;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: #ed8223;
}

.el-select .el-input__inner:focus {
  border-color: #ed8223;
}
</style>
