//Servidor de express
const express = require('express');
const http = require('http');
const socketIo = require('socket.io')
const path = require('path'); //instalado en express
const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //HTTP Server
        this.server = http.createServer(this.app);


        //configuraciones de socket
        this.io = socketIo(this.server);
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));

    }

    socketsConfiguration() {
        new Sockets(this.io);
    }

    execute() {

        //Inicializar middlewares
        this.middlewares();
        //Inicializar sockets
        this.socketsConfiguration();
        //Inicializar servers
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port);
        });
    }
}


module.exports = Server;