const app = require('express')();
const port = 3000;

const data = [
  {'id':1,'title':111},
  {'id':2,'title':222},
  {'id':3,'title':333}
]

app.listen(port,()=>{
  console.log('服务已启动~');
})

app.get('/',(request,response)=>{
  response.send('首页')
})

app.get('/post/:postId',(request,response)=>{
  //获取id
  const { postId } = request.params
  //过滤数据
  const res = data.filter(item=>item.id == postId)

  response.send(res)
})