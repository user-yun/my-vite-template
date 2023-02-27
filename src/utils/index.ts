//-----------------其他常用方法封装-----------------//
export const downloadFileByBlob = (blobData: any, fileName: string) => {
  const blob = new Blob([blobData]);
  // 兼容edge不支持createObjectURL方法
  if ("msSaveOrOpenBlob" in navigator)
    return window.navigator.msSaveOrOpenBlob(blob, fileName);
  const blobHref = window.URL.createObjectURL(blob);
  const downloadA = document.createElement("a");
  downloadA.style.display = "none";
  downloadA.download = `${fileName}`;
  downloadA.href = blobHref;
  document.body.appendChild(downloadA);
  downloadA.click();
  // 去除下载对url的影响
  document.body.removeChild(downloadA);
  window.URL.revokeObjectURL(blobHref);
};
