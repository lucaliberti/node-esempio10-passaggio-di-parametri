var express = require('express');
var app = express(); 


app.get('/', function (req, res) {
  res.send(` <html>
             <body>
               <h1>Passaggio di parametri</h1>
               <p>Passami in parametro clickando su 
                 <br>
                 <a href="/percorso/10"> http://localhost:3000/percorso/10</a>
                 <br>
                 oppure su <a href="/percorso/pippo"> http://localhost:3000/percorso/pippo</a></p>
               </p>
             </body>
             </html>

  `);
});


app.get('/percorso/:mioparametro', function (req, res) {
  let param=req.params.mioparametro;
  res.send('Mi hai inviato il parametro "'+param+'"');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
