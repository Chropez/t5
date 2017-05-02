import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
  classNames: 'round-scores-match flex',

  winner: computed('match.player1Score', 'match.player2Score', 'match.player1.id', 'match.player2.id', function() {
    let player1Score = this.get('match.player1Score');
    let player2Score = this.get('match.player2Score');

    if (player1Score > player2Score) {
      return this.get('match.player1');
    }

    return this.get('match.player2');
  }),

  player1IsWinner: computed('winner', function() {
    return this.get('winner.id') === this.get('match.player1.id');
  }),

  player2IsWinner: computed('winner', function() {
    return this.get('winner.id') === this.get('match.player2.id');
  }),

  actions: {
    removeMatch() {
      let match = this.get('match');
      let round = match.get('round');

      round.get('matches').removeObject(match);
      round.content.save().then(() => {
        match.destroyRecord();
      })
    }
  }
});
