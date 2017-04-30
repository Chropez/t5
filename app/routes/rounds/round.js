import Ember from 'ember';

const {
  RSVP: { hash }
} = Ember;

export default Ember.Route.extend({
  model({ round_id }) {
    return hash({
      round: this.store.findRecord('round', round_id),
      players: this.store.query('player', {
        orderBy: 'tournament',
        equalTo: 'ttttt'
      })
    });
  },

  actions: {
    onBack() {
      this.transitionTo('tournament');
    },

    addMatch(round, player1, player2, score1, score2) {
      let match = this.store.createRecord('match', {
        round,
        player1,
        player2,
        player1Score: score1,
        player2Score: score2
      });

      round.get('matches').pushObject(match);
      match.save().then(() => {
        round.save();
      });
    }
  }
});
