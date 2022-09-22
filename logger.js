const EventEmitter  = require("events");

const url = "http://192.168.7.1/logger";

class Log extends EventEmitter{
    send(){
        this.emit("messageLogged", { id:1, url:url})
    }
}

module.exports = Log