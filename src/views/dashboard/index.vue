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
    <div style="background:#F7F7F7;border:solid 1px transparent">
    <div style="padding:60px 0 20px;text-align:center;font-size: 42px;color:#000;">市场</div>
    <div style="margin:30px 0 20px 0;">
      <div style="display:inline-block;margin-left:110px;">
        <el-input v-model="input"  placeholder="请输入内容"></el-input>
      </div>
      <div style="display:inline-block;">
        <el-select v-model="value"  placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <el-table  :data="tableData" border="true" style="margin-top:100px;width:1200px;margin:0 auto;text-align:center;" :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      isMove: false,
      transform: "translateY(30%)",
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
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
    }
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
  height: 540px;
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
  top: 220px;
  transition: transform 2s;
  left: 0;
}

.box {
  width: 180px;
  height: 180px;
  background-color: #fff;
  margin: 20px;
  opacity: 0.5;
  border-radius: 20px;
  box-shadow: 0px 1px 4px 1px rgba(28, 28, 28, 0.2);
}
</style>
