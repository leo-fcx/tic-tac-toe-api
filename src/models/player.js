import uuidV4 from 'uuid/v4';

class Player {
  constructor(data) {
    this.id = uuidV4();
    this.nickname = data.nickname;
    this.symbol = data.symbol;
  }
}

export default Player;