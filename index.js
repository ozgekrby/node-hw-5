const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>Index sayfasına hoşgeldiniz</h2>");
  } else if (url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>Hakkımda sayfasına hoşgeldiniz</h2>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>İletişim sayfasına hoşgeldiniz</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>404 sayfa bulunamadı.</h2>");
  }
  res.end();
});

const port=3000;

server.listen(port,()=>{
    console.log(`Server ${port} portunda başlatıldı.`);
})