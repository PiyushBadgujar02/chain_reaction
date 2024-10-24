// importing websocket
const WebSocketServer = require('ws');
//Manager class file
const GameManager = require('./GameManager');

const { v4: uuidv4 } = require('uuid');  // For generating unique IDs

const wss = new WebSocketServer.Server({ port: 8080 });

const gamemanneger = new GameManager();

wss.on('connection',(ws)=>{
    ws.id = uuidv4();
    console.log(`User connected with ID: ${ws.id}`);

    gamemanneger.addUser(ws);

    ws.on('close', () => gameManager.removeUser(ws));
})