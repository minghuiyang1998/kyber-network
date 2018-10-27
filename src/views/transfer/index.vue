<template>
  <div >
    <h1 style="text-align: center">资料</h1>
    <div class="container">
      <div class="info-container">
        <div class="person-info">
        </div>
        <div class="verify-container">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>
h1 {
  font-size: 2.3rem;
  margin: 40px;
}
.container {
  display: flex;
  justify-content: center;
}
.info-container {
  width: 65%;
  height: 200px;
  display: inline-flex;
}
.person-info {
  background-color: aqua;
  width: 50%;
  height: 200px;
  margin-right: 10px
}
.verify-container {
  background-color: red;
  width: 50%;
  height: 200px;
  margin-left: 10px
}
</style>
