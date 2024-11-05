const JSONServer= require('json-server')  //importing json-server
const MPServer= JSONServer.create()  //creating server for media player
const router = JSONServer.router('db.json')  // connecting db json to the server
const middleware = JSONServer.defaults()    //middlewarw betweeen frontend and backend

const PORT = 3000|| process.env.PORT

MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`Media-Player Server Running at PORT:${PORT} & waiting for the client request...`)
})