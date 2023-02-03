// 获取整数，适合数字
function getDigits(value: any) {
  return value.replace(/[^\d]/g, ""); //清除"数字"以外的字符
}
// 获取整数和-，适合电话号码
function getPhone(value: any) {
  value = value.replace(/[^\d-]/g, ""); //清除"数字-"以外的字符
  value = value.replace(/(\-){2,}/g, "-"); //只保留第一个- 清除多余的
  value = value.replace("-", "$#$").replace(/\-/g, "").replace("$#$", "-");
  return value;
}
// 获取小数，不限制小数点
function getDecimal(value: any) {
  value = value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
  value = value.replace(/^\./g, ""); //验证第一个字符是数字而不是
  value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
  value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  // value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
  return value;
}
// 获取小数，两位小数点，适合金额类
function getAmount(value: any) {
  value = value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
  value = value.replace(/^\./g, ""); //验证第一个字符是数字而不是
  value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
  value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
  return value;
}
// 获取小数，两位小数点,可负数，适合金额类
function getAmountNeg(value: any) {
  value = value.replace(/[^\d.-]/g, ""); //清除"数字"和".-"以外的字符
  if (value.length > 1) {
    value = value.replace(/-$/g, ""); //验证最后一个字符是-就替换掉
  }
  value = value.replace(/^\./g, ""); //验证第一个字符是数字或小数点
  value = value.replace(/(\.){2,}/g, "."); //只保留第一个. 清除多余的
  value = value.replace(/(\-){2,}/g, "-"); //只保留第一个- 清除多余的
  value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  value = value.replace("-", "$#$").replace(/\-/g, "").replace("$#$", "-");
  value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
  return value;
}
// 获取中文和英文
function getZhcnAndEn(value: any) {
  return value.replace(/[^/a-zA-Z\u4E00-\u9FA5]/g, "");
}
// 获取英文和数字
function getEnAndNumber(value: any) {
  return value.replace(/[^a-zA-Z0-9]/g, "");
}
// 获取中文
function getChinese(value: any) {
  return value.replace(/[^\u4E00-\u9FA5]/g, "");
}
// 获取英文
function getLetter(value: any) {
  return value.replace(/[^a-zA-Z]/g, "");
}
export default {
  getDigits, // 获取整数，适合数字
  getPhone, // 获取整数和-，适合电话号码
  getDecimal, // 获取小数，不限制小数点
  getAmount, // 获取小数，两位小数点，适合金额类
  getAmountNeg, // 获取小数，两位小数点,可负数，适合金额类
  getZhcnAndEn, // 获取中文和英文
  getEnAndNumber, // 获取英文和数字
  getChinese, // 获取中文
  getLetter, // 获取英文
};
