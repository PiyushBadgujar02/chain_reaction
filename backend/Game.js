
const INIT_GAME = 'init_game';
const MOVE = 'move';
const GAME_OVER = 'game_over';

class Game {
    player1;
    player2;
    board;
    #startTime;
    #moveCount = 0;

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.#startTime = new Date();

        this.player1.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: 'r',
                id: player1.id
            }
        }));
        this.player2.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: 'b',
                id: player2.id
            }
        }));
    }

    

    makeMove(socket, move) {
        
    }

    endGame(quittingPlayer) {
        const otherPlayer = (quittingPlayer === this.player1) ? this.player2 : this.player1;

        otherPlayer.send(JSON.stringify({
            type: GAME_OVER,
            payload: { winner: 'opponent quit' }
        }));
    }
}

module.exports = Game;
