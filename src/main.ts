import app from './app';
import { APP_PORT } from './app/app.config';
import { connection } from './database/mysql';

/**
 * 创建服务器
 */

app.listen(APP_PORT, () => {
  console.log('服务器已启动 ~');
});

/**
 * 测试数据链接服务
 */
connection.connect((err) => {
  if (err) {
    console.log('数据服务启动失败~', err.message);
    return;
  }
  console.log('数据服务已启动~');
});
