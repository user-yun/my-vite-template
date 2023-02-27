//-----------------表单校验方法封装-----------------//
// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === "") {
//     callback(new Error("Please input the password"));
//   } else {
//     if (ruleForm.checkPass !== "") {
//       if (!ruleFormRef.value) return;
//       ruleFormRef.value.validateField("checkPass", () => null);
//     }
//     callback();
//   }
// };
// 校验必填项
const required = (message: string) => [
  { required: true, message, trigger: ["blur", "change"] },
];
// 校验必填项以及最小长度限制
const requiredMinLength = (
  message1: string,
  message2: string,
  min: number = 6
) => [
  { required: true, message: message1, trigger: ["blur", "change"] },
  { min, message: message2, trigger: ["blur"] },
];
export default {
  required,
  requiredMinLength,
};
