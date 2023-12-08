
const http = require('http');

http.createServer( (request, response)=> {
    // console.log(request);
    
    //RESPONSE TEXTO PLANO
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write('Hola Mundo en webServers con javaScript');
    // response.write('Hola Mundo en webServers con javaScript');
    
    
    
    //RESPONSE COMO JSON
    response.writeHead(200, {'Content-Type': 'application/json'});

    persona = {
        id: 1,
        nombre: 'francisco'
    }
    response.write(JSON.stringify(persona));
    response.end();
    
})
.listen( 8082 );

console.log('Escuchando en el puerto', 8082);