import express from 'express';

/**
 * 创建应用
 */
const app = express();

/**
 * 处理JSON数据
 */
app.use(express.json());

export default app;
