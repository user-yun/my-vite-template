/**
 * 验证电子邮箱格式
 */
function isEmail(value: any) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
    value
  );
}

/**
 * 验证手机格式
 */
function isMobile(value: any) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
 * 是否固定电话
 */
function isPhone(value: any) {
  let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 验证URL格式
 */
function isUrl(value: any) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function isDate(value: any) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function isDateISO(value: any) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
    value
  );
}

/**
 * 验证十进制数字
 */
function isNumber(value: any) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
 * 验证整数
 */
function isDigits(value: any) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCardNo(value: any) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  );
}

/**
 * 是否车牌号
 */
function isCarNo(value: any) {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function isAmount(value: any) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function isChinese(value: any) {
  let reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function isLetter(value: any) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function isEnOrNum(value: any) {
  //英文或者数字
  let reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 只能是字母或者英文
 */
function isZhcnAndEn(value: any) {
  //只能是字母或者英文
  let reg = /^[\u4e00-\u9fa5a-z]+$/gi;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function isEmpty(value: any) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "string":
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
        return true;
      break;
    case "boolean":
      if (!value) return true;
      break;
    case "number":
      if (0 === value || isNaN(value)) return true;
      break;
    case "object":
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function isJsonString(value: any) {
  if (typeof value == "string") {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function isArray(value: any) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function isObject(value: any) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export default {
  isEmail, // 验证电子邮箱格式
  isMobile, // 验证手机格式
  isPhone, // 是否固定电话
  isUrl, // 验证URL格式
  isDate, // 验证日期格式
  isDateISO, // 验证ISO类型的日期格式
  isNumber, // 验证十进制数字
  isDigits, // 验证整数
  idCardNo, // 验证身份证号码
  isCarNo, // 是否车牌号
  isAmount, // 金额,只允许2位小数
  isChinese, // 中文
  isLetter, // 只能输入字母
  isEnOrNum, // 只能是字母或者数字
  isZhcnAndEn, // 只能是字母或者英文
  isEmpty, // 判断是否为空
  isJsonString, // 是否json字符串
  isArray, // 是否数组
  isObject, // 是否对象
};
