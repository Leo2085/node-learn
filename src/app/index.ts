import express from 'express';
import postRouter from '../post/post.router';
import { defaultErrorHandler } from './app.middleware';

/**
 * 创建应用
 */
const app = express();

/**
 * 处理JSON数据
 */
app.use(express.json());

/**
 * 使用路由
 */
app.use(postRouter);

/**
 * 默认异常处理
 */
app.use(defaultErrorHandler);

export default app;
