const Server = require("./models/server");
require("dotenv").config();


const server = new Server();

server.execute();
/*

//El socket es el cliente conectado
io.on('connection', (socket) => { 
    //Dispositivo conectado al socket server
    console.log('Cliente conectado');
    console.log(socket.id);

    //Emite un evento
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server',
        date: new Date(),
    });

    socket.on('mensaje-cliente', (data) => {
        console.log(data);

        
    });

    socket.on('message-to-server', (data)=> {
        console.log(data)

        //io es para hacer broadcast
        io.emit('message-from-server', data);
    });
 });

 */

