import express from 'express';
import GameController from './controllers/game';
import Player from './models/player';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/games', (req, res) => {
  const games = GameController.getAll();

  res
    .status(200)
    .send({
      message: 'All games.',
      content: games
    });
});

app.post('/games', (req, res) => {
  const player = new Player(req.body.player);
  const opponent = new Player(req.body.opponent);
  const game = GameController.create([player, opponent]);

  res
    .status(200)
    .send({
      message: 'Game created.',
      content: game
    });
});

app.delete('/games/:id', (req, res) => {
  GameController.delete(req.params.id);

  res
    .status(200)
    .send({
      message: 'Game finished.'
    });
});

app.post('/games/:id/play', (req, res) => {
  const body = req.body;
  const game = GameController.play({
    id: req.params.id,
    playerId: body.playerId,
    position: body.position
  });

  res
    .status(200)
    .send({
      message: 'Turn played.',
      content: game
    });
});

app.listen(PORT, () => {
  console.log('###############################################');
  console.log('#               Tic Tac Toe API               #');
  console.log('###############################################');
  console.log(`Server running at port:Sp ${PORT}.`);
});
