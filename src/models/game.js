import Board from './board';
import uuidV4 from 'uuid/v4';

class Game {
  constructor(players) {
    this.id = uuidV4();
    this.players = new Map();
    this.board = new Board();
    this.moves = 0;

    players.forEach((player) => this.players.set(player.id, player) );

    this.playerIds = Array.from(this.players.keys());

    this.calculateNextPlayer();
  }

  calculateNextPlayer() {
    this.nextPlayerId = this.playerIds[this.moves % this.players.size];
  }

  checkForWinner() {
    for (let [playerId, player] of this.players) {
      if (this.board.hasMatch(player.symbol)) {
        this.winner = player;
        break;
      }
    }
  }

  /**
   * Plays turn for the specified user.
   *
   * @param {Number} playerId
   * @param {String} position, with the format: `x,y`, where x and y are numbers.
   */
  play(playerId, position) {
    const player = this.players.get(playerId);

    if (!player) throw 'Player does not belong to this game.';

    if (this.nextPlayerId !== playerId) throw 'Player does not have the turn.';

    this.board.mark(position, player.symbol);
    this.moves++;

    this.calculateNextPlayer();
    this.checkForWinner();
  }
}

export default Game;