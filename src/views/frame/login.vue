<template>
  <div class="login-content">
    <div class="login-background"></div>
    <el-card class="login-form">
      <h1 class="login-title">{{ title }}</h1>
      <el-form
        ref="formRef"
        :rules="formRules"
        :model="loginForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <MyInput
            type="EnAndNumber"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            :clearable="true"
            maxlength="18"
            prefix-icon="User"
            @keyup.enter="submitForm"
          ></MyInput>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <MyInput
            type="text"
            show-type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            :clearable="true"
            maxlength="18"
            prefix-icon="Lock"
            @keyup.enter="submitForm"
          ></MyInput>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        class="login-button"
        size="large"
        @click="submitForm"
      >
        Login
      </el-button>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import rules from "@/utils/rules";
import type { FormInstance, FormRules } from "element-plus";
import StoreIndex from "@/store/index";
import { adminapiV1SiteLogin } from "@/api/index";
const router = useRouter();
// 获取ENV配置信息
const title = import.meta.env.VITE_APP_TITLE;
const loginForm = ref({
  username: "1",
  password: "123456",
});
const formRef = ref<FormInstance>();
const formRules = ref<FormRules>({
  username: rules.required("请输入用户名"),
  password: rules.requiredMinLength("请输入密码", "密码长度不得小于6位"),
});
const submitForm = () => {
  if (!formRef.value) return;
  formRef.value.validate((valid, fields) => {
    if (valid) {
      let data = {
        access_token: "d_w_aaLg2aHFPnI_ZfV5lsWm4KBdjcpt_1681456605",
        employee: {
          username: "yunfei",
          id: 45,
          role_id: 1,
          open_unusual_tip: 1,
        },
      };
      // adminapiV1SiteLogin(loginForm.value).then((data) => {
      const storeIndex = StoreIndex();
      storeIndex.setToken(data.access_token);
      storeIndex.setUserInfo(data.employee);
      router.push("/");
      // });
    } else {
      ElMessage.error("请填写完整");
    }
  });
};
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
    background-size: 200% 200%;
    background-position: 0 0;
    animation: gradient-move 5s infinite linear alternate;

    @keyframes gradient-move {
      0% {
        background-position: 0% 0%;
      }

      100% {
        background-position: 100% 100%;
      }
    }
  }

  .login-form {
    position: absolute;
    z-index: 1;
    top: calc(50% - $form-width * 0.618 / 2);
    left: calc(50% - $form-width / 2);
    width: $form-width;
    height: $form-width * 0.618;
    background: $mask-color;

    .login-title {
      font-size: 26px;
      text-align: center;
    }

    .login-button {
      width: 100%;
    }
  }
}
</style>
