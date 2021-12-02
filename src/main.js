const express = require('express');
const app = express()
const port = 3000;

const data = [
  {'id':1,'title':111},
  {'id':2,'title':222},
  {'id':3,'title':333}
]

/**
 * 使用 JSON 中间件
 */
app.use(express.json())

/**
 * 创建服务
 */
app.listen(port,()=>{
  console.log('服务已启动~');
})

app.get('/',(request,response)=>{
  response.send('首页')
})
/**
 * 文章列表
 */
app.get('/post',(requese,response)=>{
  response.send(data)
})
/**
 * 文章内容
 */
app.get('/post/:postId',(request,response)=>{

  //获取内容 ID
  const { postId } = request.params

  //查找具体内容
  const res = data.filter(item=>item.id == postId)

  //作出响应
  response.send(res[0])
})

/**
 * 创建内容
 */
app.post('/post',(requese,response)=>{
  //获取请求里的数据
  const {content} = requese.body

  //设置响应状态码
  response.status('201') 
  
  //设置响应头
  response.set('say-hello','hello client')

  //输出请求头部数据
  console.log(requese.headers['say-hello'])

  //作出响应
  response.send({'message':content})
})