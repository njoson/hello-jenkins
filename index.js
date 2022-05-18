const http = require('http');
const dotenv = require('dotenv').config();

const server = http.createServer((request, response) => {
    console.log('hello fgu server1');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello FGU server1");
});

console.log('test fgu server1');
console.log('env: ', process.env.PAGE_ACCESS_TOKEN)
console.log('server url env: ', process.env.SERVER_URL)
console.log('app secret env: ', process.env.APP_SECRET)
console.log('app id env: ', process.env.APP_ID)
console.log('token env: ', process.env.TOKEN)


const port = process.env.PORT || 5000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
