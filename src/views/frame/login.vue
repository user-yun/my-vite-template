<template>
  <div class="login-content">
    <div class="login-background"></div>
    <el-card class="login-form">
      <el-form :model="loginForm" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="loginForm.name" />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
const loginForm = ref({
  name: "",
});
</script>
<style lang="scss" scoped>
$mask-color: var(--el-mask-color-extra-light);
$form-width: 400px;
.login-content {
  width: 100vw;
  height: 100vh;
  position: relative;
  .login-background {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff359b, #fffd87, #00d2ff);
    filter: blur(200px);
  }
  .login-form {
    position: absolute;
    z-index: 1;
    top: calc(50% - $form-width * 0.618 / 2);
    left: calc(50% - $form-width / 2);
    width: $form-width;
    height: $form-width * 0.618;
    background: $mask-color;
  }
}
</style>
