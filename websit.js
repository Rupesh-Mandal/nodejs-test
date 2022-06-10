const http = require("http")

const port =process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")

    if(req.url==='/'){
    res.statusCode = 200;

        res.end("<h1>fgrtyrty htrhfg</h1> <p>fwert34tertrgtrgrt </p>")
    }else if(req.url==='/about'){
    res.statusCode = 200;

        res.end("<h1>About </h1> <p>fwert34tertrgtrgrt </p>")
    }else{
        res.statusCode = 404;
        res.end("<h1>Not Found </h1> <p>fwert34tertrgtrgrt </p>")

    }

})


server.listen(port, ()=>{
    console.log(`Sever is listening on port ${port}`)
});
