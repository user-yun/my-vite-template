<template>
  <div class="card">
    <el-button type="primary" @click="getTest"> get请求测试 </el-button>
    <pre>{{ getTestData }}</pre>
  </div>
  <div class="card">
    <el-button type="primary" @click="postTest"> post请求测试 </el-button>
    <pre>{{ postTestData }}</pre>
  </div>
  <div class="card">
    <el-button type="primary" @click="deleTest"> dele请求测试 </el-button>
    <pre>{{ deleTestData }}</pre>
  </div>
  <div class="card">
    <el-button type="primary" @click="putTest"> put请求测试 </el-button>
    <pre>{{ putTestData }}</pre>
  </div>
  <div class="card">
    <el-button type="primary" @click="getBlobTest"> getBlob请求测试 </el-button>
    <pre>{{ getBlobTestData }}</pre>
  </div>
</template>
<script setup lang="ts">
import {
  adminapiV1CommonEnumParams,
  adminapiV1SiteLogin,
  adminapiV1BusinessQuotationTemplateDelete,
  adminapiV1BusinessInsurancePreUpdate,
  adminapiV1CarCheckCodeExport,
} from "@/api/index";
import { downloadFileByBlob } from "@/utils/index";
const getTestData = ref();
const getTest = () => {
  adminapiV1CommonEnumParams({
    key: "merchant_config_type,car_part_quote_oe_search_select_type,business_quotation_search_select_type,merchant_role_type,status,gender,customer_status",
  }).then((data) => {
    getTestData.value = data;
  });
};
const postTestData = ref();
const postTest = () => {
  adminapiV1SiteLogin({
    username: "username",
    password: "password",
  })
    .then((data) => {
      postTestData.value = data;
    })
    .catch((error) => {
      postTestData.value = error;
    });
};
const deleTestData = ref();
const deleTest = () => {
  adminapiV1BusinessQuotationTemplateDelete({})
    .then((data) => {
      deleTestData.value = data;
    })
    .catch((error) => {
      deleTestData.value = error;
    });
};
const putTestData = ref();
const putTest = () => {
  adminapiV1BusinessInsurancePreUpdate({})
    .then((data) => {
      putTestData.value = data;
    })
    .catch((error) => {
      putTestData.value = error;
    });
};
const getBlobTestData = ref();
const getBlobTest = () => {
  adminapiV1CarCheckCodeExport({ ids: "16" })
    .then((data) => {
      getBlobTestData.value = data;
      downloadFileByBlob(data, "getBlob请求测试.xlsx");
    })
    .catch((error) => {
      getBlobTestData.value = error;
    });
};
// onMounted(() => {});
</script>

<style lang="scss" scoped></style>
