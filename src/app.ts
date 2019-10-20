const http: any = require('http');
const fs: any = require('fs')

http.createServer((req: any, res: any) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8")

  switch (req.url) {
    case '/hello':
      res.end("hello world")
    case '/bye':
      res.end("bye world")
      break

    default:
      res.end("<h1 style='text-align:center'> Please write <span style='color:red'> '/hello' </span> or  <span style='color:red'> '/bye' </span> </h1> ")
      break
  }
}).listen(3000)

