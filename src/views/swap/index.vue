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
          <el-radio v-for="(value,index) in options" :label="index" class="check-item" style="margin-left:0px;">{{options[index].name}}
            <div style="font-size:12px">{{options[index].balance}}</div>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="right-container" style="margin-left:5px;">
        <div style="margin:10px;">Swap</div>
        <div style="display:flex;flex-direction:row;margin:10px;">
          <div>
            <div style="margin:5px;">From</div>

            <multiselect v-model="value" placeholder="选择币种" label="name" track-by="name" :options="options" :option-height="200" :custom-label="customLabel" :show-labels="false" @select="fromSelect">
              <template slot="singleLabel" slot-scope="props">
                <div class="display-container">
                  <div class="coin-icon">
                    <svg-icon :icon-class="props.option.icon" style="width: 60%; height: 60%;"></svg-icon>
                  </div>
                  <div class="coin-info">
                    <div class="option-title">{{ props.option.name }}</div>
                    <div class="option-detail">{{ `${props.option.balance} ${props.option.name}` }}</div>
                  </div>
                </div>
              </template>
              <template slot="option" slot-scope="props">
                <div class="display-container">
                  <div class="coin-icon" style="">
                    <svg-icon :icon-class="props.option.icon" style="width: 60%; height: 60%;"></svg-icon>
                  </div>
                  <div class="coin-info">
                    <div class="option-title">{{ props.option.name }}</div>
                    <div class="option-detail">{{ `${props.option.balance} ${props.option.name}` }}</div>
                  </div>
                </div>
              </template>
            </multiselect>
            <el-input v-model="input_balance" placeholder="0" class="balance_input" @change="fromInputChange" style="width:195px;border:0;margin-top:20px;">
              <template slot="append">{{value.name}}</template>
            </el-input>
            <div style="margin-top:10px;">
              钱包余额
            </div>
            <div>
              <span style="font-size:14px;color:gray">点击交换所有余额</span>
              <el-button round style="padding:3px 10px;color:#ed8223;background-color:#e2e2e2" @click="balanceClick">{{value.balance}}</el-button>
            </div>
          </div>
          <div style="margin-left:10px;">
            <div style="margin:5px;">To</div>
            <multiselect v-model="value2" placeholder="选择币种" label="name" track-by="name" :options="options" :option-height="200" :custom-label="customLabel" :show-labels="false" @select="toSelect">
              <template slot="singleLabel" slot-scope="props">
                <div class="display-container">
                  <div class="coin-icon">
                    <svg-icon :icon-class="props.option.icon" style="width: 60%; height: 60%;"></svg-icon>
                  </div>
                  <div class="coin-info">
                    <div class="option-title">{{ props.option.name }}</div>
                    <div class="option-detail">{{ `${props.option.balance} ${props.option.name}` }}</div>
                  </div>
                </div>
              </template>
              <template slot="option" slot-scope="props">
                <div class="display-container">
                  <div class="coin-icon" style="">
                    <svg-icon :icon-class="props.option.icon" style="width: 60%; height: 60%;"></svg-icon>
                  </div>
                  <div class="coin-info">
                    <div class="option-title">{{ props.option.name }}</div>
                    <div class="option-detail">{{ `${props.option.balance} ${props.option.name}` }}</div>
                  </div>
                </div>
              </template>
            </multiselect>
            <el-input v-model="to_input_balance" placeholder="0" class="balance_input" style="width:195px;border:0;margin-top:20px;">
              <template slot="append">{{value2.name}}</template>
            </el-input>

          </div>
        </div>
        <div style="margin-top:20px;width:100%;display:flex;justify-content: center;align-content: center;">
          <el-button style="background-color:#ed8223;color:white" @click="swapClick">Swap</el-button>
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
      walletAddress: "0x754e934cb080B6F4cF0b24B4F557BDC7a51149a1",
      radio2: 0,
      coins: ["ETH", "YMHC", "ABC"],
      balance: [1.001, 2, 3],
      objects: [{ "name": "ETH", "balance": 0.111 }],
      select_value: "ETH",
      select_index: 0,
      input_balance: "",
      to_select_value: "",
      to_select_index: "",
      to_input_balance: "",
      options: [

      ],
      rates: [],
      value: { name: 'AC', balance: '1.123', icon: 'ABT' },
      value2: { name: 'BC', balance: '0.123', icon: 'ADX' }
    };
  },
  methods: {
    fromSelect(value) {
      console.log(value);
      var index = this.options.indexOf(value)
      console.log(index);
      this.select_index = index
      this.radio2 = index
      this.input_balance = 0
    },
    balanceClick() {
      this.input_balance = this.options[this.select_index].balance
      var rate = this.rates[this.value.id - 1][this.value2.id - 1]
      this.to_input_balance = parseInt(this.input_balance*rate)
    },
    radioChange(value) {
      console.log(value)
      this.select_index = value
      this.value = this.options[value];
      this.input_balance = 0
    },
    toSelect(value) {
      console.log(value)
      var index = this.coins.indexOf(value)
      this.to_select_index = index

    },
    fromInputChange(value) {
      console.log(value);
      console.log(this.value)
      console.log(this.value2)
      var rate = this.rates[this.value.id - 1][this.value2.id - 1]
      console.log(rate)
      this.to_input_balance = parseInt(value * rate)
    },
    swapClick() {
      var id1 = this.value.id
      var id2 = this.value2.id
      var dic = {
        "address": this.walletAddress,
        "spend_coin_id": id1,
        "receive_coin_id": id2,
        "spend_amount": parseInt(this.input_balance)
      }
      console.log(dic)
      this.$http.post("http://115.159.111.90:8000/api/createTransfer", JSON.stringify(dic), { headers: "Content-Type:application/json" }).then(function(response) {
        console.log(response.body)
        this.options = [];
        this.getBalance()
        this.getRate()
      }).catch(function(error) {
        console.log(error)
      })
    },
    getBalance() {
      var dic = { "address": this.walletAddress }
      console.log(JSON.stringify(dic))
      this.$http.post("http://115.159.111.90:8000/api/getBalance", JSON.stringify(dic), { headers: "Content-Type:application/json" }).then(function(response) {
        console.log(response.body)
        var arr = response.body
        for (var i = 0, len = arr.length; i < len; i++) {

          var dic = {}
          dic.id = arr[i].id
          dic.name = arr[i].coin.name
          dic.balance = arr[i].value
          dic.icon = "ABT"

          this.options.push(dic);
        }

      }).catch(function(error) {
        console.log(error)
      })
    },
    getRate() {
      this.$http.get("http://115.159.111.90:8000/api/getRate", { headers: "Content-Type:application/json" }).then(function(response) {
        console.log(response.body)
        this.rates = response.body
      }).catch(function(error) {
        console.log(error)
      })
    }
  },
  mounted() {
    var dic = { "address": this.walletAddress }
    console.log(JSON.stringify(dic))
    this.$http.post("http://115.159.111.90:8000/api/getBalance", JSON.stringify(dic), { headers: "Content-Type:application/json" }).then(function(response) {
      console.log(response.body)
      var arr = response.body
      var icons = ['ABT','ADX','AST','BNB','CVC']
      for (var i = 0, len = arr.length; i < len; i++) {

        var dic = {}
        dic.id = arr[i].id
        dic.name = arr[i].coin.name
        dic.balance = arr[i].value
        dic.icon = icons.pop()
        arr[i].icon = dic.icon

        this.options.push(dic);
      }
      var dic1 = {}
      dic1.id = arr[0].id
      dic1.name = arr[0].coin.name
      dic1.balance = arr[0].value
      dic1.icon = arr[0].icon
      this.value = dic1;
      var dic2 = {}
      dic2.id = arr[1].id
      dic2.name = arr[1].coin.name
      dic2.balance = arr[1].value
      dic2.icon = arr[1].icon
      this.value2 = dic2;
    }).catch(function(error) {
      console.log(error)
    })
    this.$http.get("http://115.159.111.90:8000/api/getRate", { headers: "Content-Type:application/json" }).then(function(response) {
      console.log(response.body)
      this.rates = response.body
    }).catch(function(error) {
      console.log(error)
    })

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

.display-container {
  height: 50px;
  display: flex;
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

.coin-icon {
  width: 50px;
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.coin-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  /* 水平居中 */
}

.option-title {
  font-size: 24px;
  margin-bottom: 3px
}

.option-detail {
  font-size: 14px;
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
