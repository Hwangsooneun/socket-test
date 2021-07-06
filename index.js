const express = require('express')
const cors = require('cors')
const app = express()

const server = require('http').Server(app)
// const io = require('socket.io')(server, {
//   cors: {
//     origin: "https://kingdonkey.site",
//     methods: ["GET", "POST"]
//   }
// })
// const { v4: uuidV4 } = require('uuid')

const PORT = 80;


app.use(cors({
  origin: 'https://kingdonkey.site',
  methods: ['GET', 'POST', 'OPTION'],
  credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('CI/CD성공!!!!23')
  console.log(`방금 사이트에 유저 접속함`)
})

// app.get('/chatroom', (req, res) => {
//   let roomId = uuidV4()
//   console.log(`서버가 만든 룸ID: ${roomId}`)
//   res.redirect(`/chatroom/${roomId}`)
// })

// app.get('/chatroom/:roomId', (req, res) => {
//   res.status(200).send({roomId: req.params.roomId})
// })

// io.on('connection', (socket) => {

//   // 누군가가 방에 들어올 때마다, 클라가 서버에게 방아이디랑 유저 아이디를 서버에 전달함
//   // 그 전달받은 정보(roomId, userId)를 가지고
//   // 1. socket.join(roomId): 이름이 roomID인 방을 만듬
//   socket.on('join-room', (roomId, userId) => {
    
//     console.log(`누가 접속했다! 방번호: ${roomId}, 유저 아이디: ${userId}`)

//     // 받은 roomId를 가지고 방을 만듬
//     socket.join(roomId)

//     // 새로운 유저가 이 방에 들어왔을 때,
//     // 그 유저의 ID를 그 방에 있는 다른 사람의 클라에 전달함.
//     // (그래야 그 새 유저의 영상을 이미 있던 사람들이 볼 수 있게 연결 시도할 수 있음)
//     socket.broadcast.to(roomId).emit('user-connected', userId)
    
//     socket.on('disconnect', () => {
//       console.log(`유저 떠났다!!! 떠난놈 ID: ${userId}`)
//       socket.broadcast.to(roomId).emit('user-disconnected', userId)
//     })
//   })
// })

server.listen(PORT, () => {
  console.log(`서연: 서버는 현재 ${PORT}포트에서 돌아가는 중이다`)
})


/*
< 추가 설명 >

io.on('connection', (socket) => {
  console.log('유저 연결했음')
  socket.on('disconnect), () => {
    console.log('유저 나갔음)
  })
})
=> 빌트인 키워드인 'connection'와 'disconnect'
이 코드는 우리의 io 인스턴스에 클라이언트가 접속했을 때에 발생함.

=> (파라미터)로 주어진 socket은 클라이언트 쪽 소켓.

=> 모든 socket.io 코드는 io.on('connection', (socket)=>{...})
안에 쓰여지게 됨. 왜냐면 여기서 만들어지는 저 (socket)을 관리하는 일이기 때문에.

*/