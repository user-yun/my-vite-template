import { get, put, post, dele, getBlob } from "@/utils/axios";

const apiUrl = import.meta.env.VITE_API_URL;
// pos请求示例
export const adminapiV1SiteLogin = <Res = any, Params = any>(
  params?: Params
) => {
  return post<Res>(`${apiUrl}/adminapi/v1/site/login`, params);
};
// get请求示例
export const adminapiV1CommonEnumParams = <Res = any, Params = any>(
  params?: Params
) => {
  return get<Res>(`${apiUrl}/adminapi/v1/common/enum/params`, params);
};
// dele请求示例
export const adminapiV1BusinessQuotationTemplateDelete = <
  Res = any,
  Params = any
>(
  params?: Params
) => {
  return dele<Res>(
    `${apiUrl}/adminapi/v1/business-quotation-template/delete`,
    params
  );
};
// put请求示例
export const adminapiV1BusinessInsurancePreUpdate = <Res = any, Params = any>(
  params?: Params
) => {
  return put<Res>(
    `${apiUrl}/adminapi/v1/business-insurance/pre-update`,
    params
  );
};
// getBlob请求示例
export const adminapiV1CarCheckCodeExport = <Res = any, Params = any>(
  params?: Params
) => {
  return getBlob<Res>(`${apiUrl}/adminapi/v1/car-check-code/export`, params);
};
