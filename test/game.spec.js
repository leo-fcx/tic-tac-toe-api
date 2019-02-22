import GameController from '../src/controllers/game';
import Game from '../src/models/game';
import Player from '../src/models/player';
import chai from 'chai';

chai.should();

describe('Tic Tac Toe Game', () => {

  describe('Game Controller', () => {
    let player;
    let opponent;
    let game;

    beforeEach(() => {
      player = new Player({ nickname: 'Hugo', symbol: 'x' });
      opponent = new Player({ nickname: 'Paco', symbol: 'o' });
      game = GameController.create([player, opponent]);
    });

    afterEach(() => {
      // game.board.print();
    });

    it('should create new game successfully.', () => {
      game.should.be.an.instanceOf(Game);
    });

    it('should return a winner for a ROW tic-tac-toe', () => {
      GameController.play({id: game.id, playerId: player.id, position: '0,0'});
      GameController.play({id: game.id, playerId: opponent.id, position: '1,0'});
      GameController.play({id: game.id, playerId: player.id, position: '0,1'});
      GameController.play({id: game.id, playerId: opponent.id, position: '1,1'});
      GameController.play({id: game.id, playerId: player.id, position: '0,2'});

      game.winner.should.be.an.instanceOf(Player);
    });

    it('should return a winner for a COL tic-tac-toe', () => {
      GameController.play({id: game.id, playerId: player.id, position: '0,0'});
      GameController.play({id: game.id, playerId: opponent.id, position: '1,1'});
      GameController.play({id: game.id, playerId: player.id, position: '1,0'});
      GameController.play({id: game.id, playerId: opponent.id, position: '0,1'});
      GameController.play({id: game.id, playerId: player.id, position: '2,0'});

      game.winner.should.be.an.instanceOf(Player);
    });

    it('should return a winner for a DIAGONAL tic-tac-toe', () => {
      GameController.play({id: game.id, playerId: player.id, position: '0,0'});
      GameController.play({id: game.id, playerId: opponent.id, position: '1,0'});
      GameController.play({id: game.id, playerId: player.id, position: '1,1'});
      GameController.play({id: game.id, playerId: opponent.id, position: '0,1'});
      GameController.play({id: game.id, playerId: player.id, position: '2,2'});

      game.winner.should.be.an.instanceOf(Player);
    });
  });

  describe('Player', () => {
    xit('should be created successfully.', () => {});
  });

  describe('Game', () => {
    xit('should be created successfully.', () => {});
  });

  describe('Board', () => {
    xit('should be created successfully.', () => {});
  });
});