// 后端入口
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { response } = require('express')
const app = express() // 创建服务

app.listen(3000, function(){
    console.log('server started at http://127.0.0.1:3000')
})

app.use(cors({
    credentials: true,
    optionsSuccessStatus: 200,
    origin: 'http://127.0.0.1:5501' // 设置为项目所在服务器目录
}))

// 响应链接 http://127.0.0.1:3000/user 的请求
app.get('/user', (req, res) => {
    const user = {name : 'tfq', age : 20}
    fs.readFile('./image-icon.png', (err, data) => { // data 为图片的二进制数据
        if(err){
            res.sendStatus(500) // 发送错误码
        }
        else{
            user.avatar = data.toString('base64') // 加入新的属性
            res.send(user)
        }
    })
})
// request 请求的参数
// response 返回给前端