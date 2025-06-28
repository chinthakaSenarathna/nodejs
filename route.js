const fs = require("fs");

const requestListener = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write("<html>");
        res.write("<head>");
        res.write("<title>This is NodeJs Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write('<form action="/text" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">submit</button>');
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if(url === "/text" && method === "POST"){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile("text.txt", message, err => {
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end();
            });
        })
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>This is NodeJs Server</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h2>Hey... This is the NodeJs Server...</h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}

const getMessage = "Default Message";

module.exports.requestListener = requestListener;

module.exports.getMessage = getMessage;