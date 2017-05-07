import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import computed, { alias } from 'ember-computed';

export default Model.extend({
  player1: belongsTo('player'),
  player2: belongsTo('player'),
  player1Score: attr('number'),
  player2Score: attr('number'),

  tournament: belongsTo(),

  round: belongsTo(),

  winner: computed('player1Score', 'player2Score', 'player1.id', 'player2.id', function() {
    let { player1Score, player2Score, player1, player2 } =
      this.getProperties('player1Score', 'player2Score', 'player1', 'player2');

    if (player1Score > player2Score) {
      return player1;
    }

    return player2;
  }),

  winnerId: alias('winner.id')
});
