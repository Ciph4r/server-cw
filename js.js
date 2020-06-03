const htttp = require('http')
const fs = require('fs')
 const server = htttp.createServer((req , res)=> {
   let readStream = ''
 

     if(req.url === '/'){
        readStream = fs.createReadStream(__dirname + '/index.html' , 'utf8')
        res.writeHead(200,{ 'Content-Type' : 'text/plain'})
        readStream.pipe(res)
        
     }
  
   else if (req.url === '/about'){
        readStream = fs.createReadStream(__dirname + '/about.html' , 'utf8')
        readStream.pipe(res)
        
    }
    else if (req.url === '/user'){
        res.writeHead(200,{ 'Content-Type' : 'application/json' })
        res.write(JSON.stringify({user: ['dave' , 'denis' , 'ginny']}))
        
    }
    else {
        readStream = fs.createReadStream(__dirname + '/error.html' , 'utf8')
        readStream.pipe(res)
    }
        
        // res.end('this is my firt node server')
})

server.listen(3000 , () => {
    console.log('listening on port 3000')
})