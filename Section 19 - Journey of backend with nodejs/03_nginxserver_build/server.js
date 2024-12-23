const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

// 2 creating a server
const server = http.createServer((req, res) => {
  // req.url === '/'=>'index.html'//instead of this we will use path.join it will give current directory path
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);

  // extname --> .css,.html
  const extName = String(path.extname(filePath)).toLowerCase(); // it will give extension name of filePath and convert it into string also it will convert it into lowercase

  // what type of files we are supporting
  // mimeTypes is likely an object (or map) that maps file extensions to their corresponding MIME types.
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
  };

  // If the file extension is not found in the mimeTypes object, the code falls back to a default MIME type: 'application/octet-stream'.
  // 'application/octet-stream' is a generic binary file type, which tells the client (browser) that the file content is not recognized and might require downloading.
  const contentType = mimeTypes[extName] || "application/octet-stream";

  // 3 serving the server
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // If the file is not found, return a 404 error.
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: file not found bro");
      } else {
        // For other errors, return a 500 internal server error.
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("500: Internal Server Error");
      }
    } else {
      // Informational responses (100 – 199)
      // Successful responses (200 – 299)
      // Redirection messages (300 – 399)
      // Client error responses (400 – 499)
      // Server error responses (500 – 599)
      // response head part
      res.writeHead(200, { "Content-Type": contentType });

      // response body part
      res.end(content, "utf-8");
    }
  });
});

// 4 listening
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
