export default class DownloadFile {
  // 服务端返回的二进制流转为blob对象，然后在使用window.URL.createObjectUrl()得到文件路径
  getFileUrl (stream: any, fileName: string) {
    let blob = new Blob([stream], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
    let url = window.URL.createObjectURL(blob)
    this.loadFile(url, fileName)
  }
  loadFile (url: string, fileName: string) {
    let aDom = document.createElement('a')
    aDom.href = url
    aDom.download = fileName
    document.body.appendChild(aDom)
    aDom.click()
    document.body.removeChild(aDom)
    window.URL.revokeObjectURL(url)
  }
}