

const express = require('express')
const {userRouter} = require('./routes/user.Routes')
const {noteRouter} = require('./routes/note.Routes')
const cors = require('cors')
const {connection} = require('./db')

const app = express()
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).send({"msg":"this is the homepage"})
})

app.use('/user',userRouter)
app.use('/note',noteRouter)

app.listen(8080, async()=>{
     try{
         await connection
         console.log('Connected to DB')
         console.log('Server is running at port 8080')
     }catch(err){
        console.log("Error:",err)
     }
})