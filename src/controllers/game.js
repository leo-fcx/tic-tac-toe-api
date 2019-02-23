import Game from '../models/game';

const games = new Map();

const GameController = {

  create: (players) => {
    const game = new Game(players);
    games.set(game.id, game);
    return game;
  },

  delete: (id) => {
    games.delete(id);
  },

  get: (id) => {
    return games.get(id);
  },

  getAll: () => {
    return Array.from(games.values());
  },

  play: (data) => {
    const game = games.get(data.id);
    game.play(data.playerId, data.position);
    return game;
  },
};

export default GameController;