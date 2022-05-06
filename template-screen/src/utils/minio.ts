//  初始化
const Minio = require('minio')

export const minioClient = new Minio.Client({
  endPoint: '10.18.4.132',
  port: 9000,
  useSSL: true,
  accessKey: 'minioadmin',
  secretKey: 'minioadmin',
})
