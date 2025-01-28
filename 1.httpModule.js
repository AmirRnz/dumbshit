const http = require('http')


// req => incoming request(from web browser)
// res => response is what we send back
const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end('welcome to our homepage') // do the same as write
    }
    else if(req.url==='/about'){
        res.end('this is our history') // do the same as write
    }
    else res.end(`
        <h1>oops!!</h1> 
        <a href="/"> back homepage</a>
        `) // we can use html tags as response.
})
server.listen(5000)