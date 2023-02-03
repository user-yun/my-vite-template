<template>
  <el-form :model="demoData" label-width="300px">
    <el-form-item label="获取整数，适合数字">
      <MyInput type="Digits" v-model="demoData.Digits"></MyInput>
    </el-form-item>
    <el-form-item label="获取整数和-，适合电话号码">
      <MyInput type="Phone" v-model="demoData.Phone"></MyInput>
    </el-form-item>
    <el-form-item label="获取小数，不限制小数点">
      <MyInput type="Decimal" v-model="demoData.Decimal"></MyInput>
    </el-form-item>
    <el-form-item label="获取小数，两位小数点，适合金额类">
      <MyInput
        type="Amount"
        v-model="demoData.Amount"
        maxlength="7"
        placeholder="请输入正确的金额"
      >
        <template #suffix>
          <el-icon><Calendar /></el-icon>
        </template>
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </MyInput>
    </el-form-item>
    <el-form-item label="获取小数，两位小数点,可负数，适合金额类">
      <MyInput type="AmountNeg" v-model="demoData.AmountNeg"></MyInput>
    </el-form-item>
    <el-form-item label="获取中文和英文">
      <MyInput type="ZhcnAndEn" v-model="demoData.ZhcnAndEn"></MyInput>
    </el-form-item>
    <el-form-item label="获取英文和数字">
      <MyInput type="EnAndNumber" v-model="demoData.EnAndNumber"></MyInput>
    </el-form-item>
    <el-form-item label="获取中文">
      <MyInput
        type="Chinese"
        v-model="demoData.Chinese"
        maxlength="10"
        placeholder="只可以输入中文"
        prefix-icon="Calendar"
        suffix-icon="Search"
      ></MyInput>
    </el-form-item>
    <el-form-item label="获取英文">
      <MyInput type="Letter" v-model="demoData.Letter" disabled></MyInput>
    </el-form-item>
    <el-form-item label="获取所有">
      <MyInput
        v-model="demoData.text"
        placeholder="可以输入所有文字"
        :clearable="true"
        maxlength="10"
        prefix-icon="Calendar"
        suffix-icon="Search"
      ></MyInput>
    </el-form-item>
    <el-form-item label=" ">
      <pre>{{ demoData }}</pre>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
const demoData = ref();
demoData.value = {
  Letter: "adc",
  EnAndNumber: "adc123",
};
</script>
<style lang="scss" scoped>
.el-form {
  width: 600px;
}
</style>
