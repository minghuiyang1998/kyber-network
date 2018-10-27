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

    <div class="card-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="header">转账</span>
        </div>
        <div class="content-container">
          <el-row :gutter="20">
            <el-col :span="15">
              <div class="heading">转入账户地址</div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 10}"
                placeholder="请输入转入账户地址"
                v-model="textarea3">
              </el-input>
            </el-col>
            <el-col :span="9">
              <div class="heading">选择币种</div>
              <multiselect 
                v-model="value" 
                placeholder="选择币种" 
                label="name" 
                track-by="name" 
                :options="options" 
                :option-height="200"
                :custom-label="customLabel" 
                :show-labels="false">
                <template slot="singleLabel" slot-scope="props">
                  <div class="display-container">
                    <div class="coin-icon">
                      <svg-icon :icon-class="props.option.icon" style="width: 60%; height: 60%;"></svg-icon>
                    </div>
                    <div class="coin-info">
                      <div class="option-title">{{ props.option.name }}</div>
                      <div class="option-detail">{{ `${props.option.balance}  ${props.option.name}` }}</div>
                    </div>
                  </div>
                </template>
                <template slot="option" slot-scope="props">
                  <div class="display-container">
                    <div class="coin-icon">
                      <svg-icon :icon-class="props.option.icon" style="width: 60%; height: 60%;"></svg-icon>
                    </div>
                    <div class="coin-info">
                      <div class="option-title">{{ props.option.name }}</div>
                      <div class="option-detail">{{ `${props.option.balance}  ${props.option.name}` }}</div>
                    </div>
                  </div>
                </template>
              </multiselect>
              <el-input placeholder="请输入内容" v-model="inputBalance" class="count-input">
                <template slot="append">{{ value.name }}</template>
              </el-input>
              <div class="heading">账户余额</div>
              <div>
                <span style="font-size:14px;color:gray">点击交换所有余额</span> 
                <el-button round style="float: right; padding:3px 10px;color:#ed8223;background-color:#e2e2e2" @click="balanceClick">{{ value.balance }}</el-button>
              </div>
              <el-button class="submit-button" style="padding:3px 10px;color:#fafafa;background-color:#ed8223" @click="transfer">转账</el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    return {
      radio: 'TRANSFER',
      value: { name: 'AC', balance: '1.123', icon: 'ABT' },
      options: [
        { name: 'AC', balance: '1.123', icon: 'ABT' },
        { name: 'BC', balance: '0.123', icon: 'ADX' },
        { name: 'CC', balance: '1.213', icon: 'AST' },
        { name: 'DC', balance: '0.432', icon: 'BNB' },
        { name: 'EC', balance: '0.133', icon: 'CVC' }
      ],
      inputBalance: ''
    };
  },
  methods: {
    balanceClick() {
      this.inputBalance = this.value.balance;
    },
    transfer(){
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    }
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
.box-card {
  width: 900px;
}
.card-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  height:600px;
}
.header {
  font-size: 30px
}
.content-container {
  margin-top: 5px
}
.heading {
  font-size: 20px;
  margin-bottom: 20px
}
.display-container {
  height: 50px;
  display: flex;
}
.coin-icon {
  width: 50px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}
.coin-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center; /* 水平居中 */
}
.option-title {
  font-size: 24px;
  margin-bottom: 3px
}
.option-detail {
  font-size: 14px;
}
.count-input {
  margin: 30px 0 30px 0
}
.submit-button {
  width: 160px;
  height: 50px;
  margin: 50px 0 0 0;
  color:#fafafa;
  background-color:#ed8223;
  font-size: 20px
}
</style>
