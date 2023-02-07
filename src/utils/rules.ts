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
export const required = (message: string) => [
  { required: true, message, trigger: ["blur", "change"] },
];
export const requiredMinLength = (
  message1: string,
  message2: string,
  min: number = 6
) => [
  { required: true, message: message1, trigger: ["blur", "change"] },
  { min, message: message2, trigger: ["blur", "change"] },
];
