import axios, { AxiosRequestConfig } from "axios";
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
    // let token = localStorage.getItem("x-auth-token");
    // if (token) {
    //     config.headers = {"x-auth-token": token}
    // }
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
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const get = (url: string, params: any, config: AxiosRequestConfig) => {
  return request.get(url, { params, ...config });
};
const put = (url: string, params: any, config: AxiosRequestConfig) => {
  return request.put(url, params, config);
};
const post = (url: string, params: any, config: AxiosRequestConfig) => {
  return request.post(url, params, config);
};
const dele = (url: string, params: any, config: AxiosRequestConfig) => {
  return request.delete(url, { params, ...config });
};
const getBlob = (url: string, params: any, config: AxiosRequestConfig) => {
  return request.get(url, { params, ...config, responseType: "blob" });
};

export default request;
export { get, put, post, dele, getBlob };
