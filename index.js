const http = require("http"); //nodejs inbuilt package
const myModules = require("./myCustomModule");
const upperCase = require("upper-case");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); //html tag
    const date = myModules.myDate();
    const myTime = myModules.myTime();
    const myName = upperCase.upperCase("Madhabi");
    res.write(
      "<h1>Hello World," +
        myName +
        "</h1><p>" +
        date +
        "</p><p>" +
        myTime +
        "</p>"
    ); //body
    res.end();
  })
  .listen(5555);

console.log("App is running on port 5555");
