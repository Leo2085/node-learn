import app from './app';
import { APP_PORT } from './app/app.config';

/**
 * 创建服务器
 */

app.listen(APP_PORT, () => {
  console.log('服务器已启动 ~');
});
