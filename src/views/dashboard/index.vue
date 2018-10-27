<template>
  <div >
    <!-- <div class="dashboard-text">name:{{ name }}</div> -->
    <!-- <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div> -->
    <div id="container" style="position:relative;background-color:rgb(0,188,150);">
      <div v-if="!isMove" style="padding:60px 0 20px;text-align:center;font-size: 42px;color:#fff;">即时而安全的代币间兑换</div>
      <div v-if="isMove" style="padding:60px 0 20px;text-align:center;font-size: 42px;color:#fff;">导入地址</div> 
      <div v-if="!isMove" style="padding-bottom:40px;text-align:center;font-size: 36px;color:#fff;">无需订单，无需充值，无需包装</div>
      <el-button id="button" v-if="!isMove" v-on:click="onAcceptButtonTap">接受条款和协议</el-button>
    </div>
    <div id="center-boxes" :style="{transform}" >
      <div class="box">
        <svg-icon v-if="!isMove" class="icon" icon-class="icon_Metamask"/>    
        <svg-icon v-else class="icon" icon-class="icon_Metamask_1"/>
        <div v-if="!isMove" class="text_1">METAMASK</div>
        <div v-else class="text_2">连接至METASK</div>
        <el-button v-if="isMove" type="success">连接</el-button>
      </div>
      <div class="box">
        <svg-icon v-if="!isMove" class="icon" icon-class="json_1"/>    
        <svg-icon v-else class="icon" icon-class="json_2"/>
        <div v-if="!isMove" class="text_1">JSON</div>
        <div v-else class="text_2">从JSON文件导入</div>
        <el-button v-if="isMove" type="success">选择或拖动</el-button>
      </div>
      <div class="box">
        <svg-icon v-if="!isMove" class="icon" icon-class="lock_1"/>    
        <svg-icon v-else class="icon" icon-class="lock_2"/>
        <div v-if="!isMove" class="text_1">TREZOR</div>
        <div  v-else class="text_2">从TREZOR导入</div>
        <el-button v-if="isMove" type="success">用TREZOR兑换</el-button> 
      </div>
      <div class="box">
        <svg-icon v-if="!isMove" class="icon" icon-class="icon_ledge_1"/>    
        <svg-icon v-else class="icon" icon-class="icon_ledge_2"/>
        <div v-if="!isMove" class="text_1">LEDGER</div>
        <div  v-else class="text_2">从Ledger导入</div>
        <el-button v-if="isMove" type="success">用Ledger兑换</el-button> 
      </div>
      <div class="box">
        <svg-icon v-if="!isMove" class="icon" icon-class="key_1"/>    
        <svg-icon v-else class="icon" icon-class="key_2"/>
        <div v-if="!isMove" class="text_1">KEY</div>
        <div  v-else class="text_2">请输入您的密钥</div>
        <el-button v-if="isMove" type="success" >请输入您的密钥</el-button> 
      </div>
    </div>
    <div style="padding:150px 0;background:#F7F7F7;border:solid 1px transparent">
      <div v-if="isMove" style="padding:20px 0 20px;text-align:center;font-size: 42px;color:#000;">YMHC市场</div> 
      <el-table  :data="tableData" border="true" style="margin-top:100px;width:1200px;margin:0 auto;text-align:center; font-size: 20px" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column
          prop="market"
          label="市场"
          sortable
          width="280">
        </el-table-column>
        <el-table-column
          prop="sell"
          label="卖价"
          sortable
          width="280">
        </el-table-column>
        <el-table-column
          prop="buy"
          label="买价"
          sortable
          width="280">
        </el-table-column>
        <el-table-column
          prop="pass7days"
          label="近段时间"
          :formatter="formatter">
          <template slot-scope="scope">
            <line-chart 
              :chart-data="datacollection" 
              :width="200"
              :height="100"
              :options="{responsive: false, maintainAspectRatio: false, legend: { display: false }, tooltips: {enabled: false, intersect: false}}"></line-chart>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LineChart from './LineChart.js'
import axios from 'axios'

export default {
  name: "Dashboard",
  components: {
    LineChart
  },
  data() {
    return {
      isMove: false,
      transform: "translateY(50%)",
      input: "",
      tableData: [
        {
          market: "KNC/ENT",
          sell: "0.002267 ETH",
          buy: "0.002267 ETH"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "ETH"
        },
        {
          value: "选项2",
          label: "USD"
        }
      ],
      value: "",
      datacollection: null
    };
  },
  computed: {
    ...mapGetters(["name", "roles"])
  },
  methods: {
    onAcceptButtonTap() {
      this.isMove = true;
      this.transform = "translateY(0)";
    },
    formatter(row, column) {
      return row.address;
    },
    fillData () {
      this.datacollection = {
        labels: ['', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: '#f87979',
            data: [13,23,14,52,31,54]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  mounted () {
    this.fillData()
    axios.post('http://115.159.111.90:8000/api/getPriceLog', {
      'coin_id': 2
    }).then(res =>{
      console.log(res.data)
      var e = res.data.pop();
      var value = e['value_by_ETH']
      this.tableData = []
      this.tableData.push({
        market: "YMHC/ETH",
        sell: value + " ETH",
        buy: value + " ETH"
      })
    })
    axios.post('http://115.159.111.90:8000/api/getPriceLog', {
      'coin_id': 3
    }).then(res =>{
      console.log(res.data)
      var e = res.data.pop();
      var value = e['value_by_ETH']
      this.tableData.push({
        market: "LYB/ETH",
        sell: value + " ETH",
        buy: value + " ETH"
      })
    })
  }
};
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

#container {
  height: 400px;
}

#button {
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

#button:hover {
  width: 220px;
}

#center-boxes {
  width: 100%;
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  justify-content: center;
  top: 180px;
  transition: transform 2s;
  left: 0;
}

.box {
  width: 180px;
  height: 180px;
  background-color: rgba(255, 255, 255, 1);
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0px 1px 4px 1px rgba(28, 28, 28, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box .icon {
  width: 40px;
  height: 40px;
  margin: 30px 0 20px;
}

.box .text_1 {
  margin-bottom: 10px;
  font-weight: 600;
  margin-top: 15px;
}

.box .text_2 {
  margin-bottom: 10px;
  color: #00c69a;
  font-weight: 600;
}
</style>
