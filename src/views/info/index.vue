<template>
  <div style="justify-content: center;">
    <h1 style="text-align: center">资料</h1>
    <div class="container">
      <div class="info-container">
        <div class="person-info">
          <div class="detail-info">
            <label for="profile-display-name" style="margin-bottom:10px;display:block">现实名</label>
            <el-input v-model="input" placeholder="请输入内容" style="margin-bottom:10px"></el-input>
            <label for="profile-display-name" style="margin-bottom:10px;display:block">联系方式</label>
            <el-select v-model="value" placeholder="请选择" style="margin-bottom:10px;display:block">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <label for="profile-display-name" style="margin-bottom:10px;display:block">联系语言</label>
            <el-select v-model="value" placeholder="请选择" style="margin-bottom:10px;display:block">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>

            <button class="button primary" type="submit">更新</button>
          </div>

        </div>
        <div class="verify-container">
          <div class="user-profile">
            <label for="profile-display-name" style="margin-bottom:10px;display:block">我的资料验证</label>
            <div style="">
              <div style="width:100%;display:block">
                <div style="color:#5ca9f2;background-color:#DBEAFA;width:120px;text-align:center;padding:2px;">未验证</div>
              </div>
              <div style="display:block;font-size:14px">
                <div style="width:100%;margin-top:20px;display:inline-block">
                  <strong style="margin-bottom:10px;display:block">完成您的资料验证并获得独特的益处：</strong>
                  <ul>
                    <li>
                      增加KyberSwap的交易限额
                    </li>
                  </ul>
                </div>
                <div style="display:inline-block;border:2px solid #777;min-width:110px;text-align:center;border-radius:4px;padding:5px;">
                  立即验证
                </div>
              </div>

            </div>
          </div>
          <div class="user-profile" style="margin-top:20px;">
            <label for="profile-display-name" style="margin-bottom:10px;display:block">关联社交账户</label>
            <div class="social_account" style="margin:0;">
              <div class="item" style="">
                <a href="" style="font-size:14px;color:#666666">关联我的Google</a>
              </div>
             <div class="item">
                <a href="" style="font-size:14px;color:#666666">关联我的Facebook</a>
              </div>
              <div class="item">
                <a href="" style="font-size:14px;color:#666666">关联我的Twitter</a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
       
    </div>
    <div class="container" style="">
        <div class="wallet">
          <div style="width:66.7%;display:block">
            <h6 class="mt-8" style="font-size:16px;font-weight:500">我的钱包
              <span class="chip" style="inline-block">至多3个钱包</span>
            </h6>
            
          </div>

          <div  style="display:flex;">
            <div>
              <label for="profile-display-name" style="margin-bottom:10px;display:block">标签</label>
               <el-input v-model="input" placeholder="标签" style="margin-bottom:10px;"></el-input>
            </div>
            <div style="margin-left:20px;">
              <label for="profile-display-name" style="margin-bottom:10px;display:block;">地址</label>
               <el-input v-model="input" placeholder="地址" style="margin-bottom:10px;width:400px;"></el-input>
            </div>
          </div>
          <button class="button primary" type="submit">添加钱包</button>

        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '123'
      }],
      options2: [{
        value: '选项1',
        label: '中文'
      }],
      value: ''
    }
  }
}
</script>

<style>
h1 {
  font-size: 2.3rem;
  margin: 40px;
}
.item{
  margin-bottom:15px;
}

.chip{
    font-size: 14px;
    font-weight: 600;
    color: #2fcc9e;
    background-color: #f1f1f1;
    border-radius: 23px;
    padding: 7px 12px;
    vertical-align: middle;
}



.container {
  display: flex;
  justify-content: center;
  height: auto;
}

.info-container {
  width: 65%;
  justify-content: center;

  display: inline-flex;
}

.person-info {
  /*background-color: aqua;*/
  width: 50%;
  height: 500px;
  margin-right: 10px;
  align-items: center;
  border-radius: 5px;
  padding: 25px 35px 20px;
  border: 1px solid #e2e2e2;
}
.mt-8{
  margin-top:2.4rem;
}

.verify-container {
  /*background-color: red;*/
  width: 50%;
  height: 200px;
  margin-left: 10px
}

.detail-info {
  margin: 0px;
}

.button.primary {
  border: 2px solid transparent;
  background-color: #31cb9e;
  color: white;
  font-weight: 600px;
  border-radius: 4px;
  min-width: 150px;
  height: 45px;
}

.user-profile {
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  padding: 25px 35px 20px;
}
.wallet{
  width:65%;
  margin-top:2.4rem;
  margin-bottom:2.4rem;
  border: 1px solid #e2e2e2;
  align-items: center;
  padding: 25px 35px 20px;
  border-radius: 5px;

}
</style>
