<template>
  <div id="login">
    <div class="title">login</div>
    <div class="username">
      <input v-model="username" />
    </div>
    <input v-model="password" type="password" @keyup.enter.native="login" />
    <button @click="login">login</button>
  </div>
</template>
<style scoped src="@/style/login.less" lang="less"/>
<script lang="ts">
import Login from "../components/Logins";
export default Login;
</script>
