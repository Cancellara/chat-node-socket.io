class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => { 
            
            //Escuchar evento
            socket.on('message-to-server', (data)=> {
                console.log(data)
        
                //io es para hacer broadcast
                this.io.emit('message-from-server', data);
            });
         });
    }

}


module.exports = Sockets;