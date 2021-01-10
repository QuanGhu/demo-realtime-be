const app = require('express')(),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      apiRouter = require('./route/Index'),
      cors      = require('cors'),
      UserModel = require('./model/User')

const server = app.listen(8000, () => {
    console.log(`Listening on Port ${8000}!`)
})

app.use(cors())
app.use(bodyParser.json({extended: true}))

mongoose.connect('mongodb://localhost:27017/user_realtime', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log('>> connected to db')
})

app.use('/api', apiRouter)
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Welcome to my world!'})
})

const { json } = require('body-parser')
// declare socket io
const socket = require('socket.io')
let io = socket(server, { cors: {
    origin: '*',
}})

// declare io on waiting connection
io.on('connection', socket => {
    console.log('User Connected!')

    // when frontend send retrieveNewUser Event
    socket.on('retrieveNewUser', async () => {  // demiter / listener / pendenger
        
        try {
            const list = await UserModel.find()
            console.log(list)
            console.log(`Hi Backend , Frontend Just Add new user`)
            io.emit('listUser', { data: list }) // emiter / event / pengeksekusi
        } catch (error) {
            console.log(error)
        }
    })
    

})




