import Route from 'ember-route';
import Ember from 'ember';

const {
  RSVP: { all }
} = Ember;

export default Route.extend({
  model() {
    return this.store.findRecord('tournament', 'ttttt');
  },

  afterModel() {
    return all([
      this.store.query('round', {
        orderBy: 'tournament',
        equalTo: 'ttttt'
      }),
      this.store.query('match', {
        orderBy: 'tournament',
        equalTo: 'ttttt'
      }),
      this.store.query('player', {
        orderBy: 'tournament',
        equalTo: 'ttttt'
      })
    ]);
  },

  actions: {
    onBack() {
      this.transitionTo('index');
    },
    goToPlayers() {
      this.transitionTo('players');
    }
  }
});
