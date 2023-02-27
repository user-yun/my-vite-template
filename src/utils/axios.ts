//-----------------请求方法封装-----------------//
import axios, { AxiosRequestConfig } from "axios";
import test from "@/utils/test";
import StoreIndex from "@/store/index";
// 创建axios实例
const request = axios.create({
  baseURL: "", // 所有的请求地址前缀部分
  timeout: 60000, // 请求超时时间(毫秒)
  withCredentials: false, // 异步请求携带cookie
  // headers: {
  // 设置后端需要的传参类型
  // 'Content-Type': 'application/json',
  // 'token': x-auth-token',//token
  // 'X-Requested-With': 'XMLHttpRequest',
  // },
});

// request拦截器
request.interceptors.request.use(
  (config) => {
    // 如果你要去localStor获取token
    const storeIndex = StoreIndex();
    const token = storeIndex.getToken;
    if (token) {
      config.headers["X-Api-Key"] = token;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    Promise.reject(error);
  }
);

// response 拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const code = import.meta.env.VITE_APP_AXIOS_SUCCESS_CODE;
    const message = import.meta.env.VITE_APP_AXIOS_ERROR_MESSAGE == "true";
    // 如果类型是下载文件类型
    if (response.config.responseType == "blob") {
      return response.data;
    } else if (
      // 否则就是正常请求，判断code是否正确
      String(response.data.code) == String(code) &&
      !test.isEmpty(response.data.data)
    ) {
      return response.data.data;
    } else {
      if (message) {
        ElMessage.error(response.data.message);
      }
      return Promise.reject(response.data);
    }
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const get = <T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request.get(url, { params, ...config });
};
const put = <T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request.put(url, params, config);
};
const post = <T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request.post(url, params, config);
};
const dele = <T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request.delete(url, { params, ...config });
};
const getBlob = <T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return request.get(url, { params, ...config, responseType: "blob" });
};

export default request;
export { get, put, post, dele, getBlob };
