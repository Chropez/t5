import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('player', {
      orderBy: 'tournament',
      equalTo: 'ttttt'
    });
  },

  afterModel() {
    return this.store.findRecord('tournament', 'ttttt');
  },

  actions: {
    onBack() {
      this.transitionTo('index');
    },

    addPlayer() {
      this.transitionTo('players.new')
    },

    editPlayer(player) {
      this.transitionTo('players.player', player);
    },

    removePlayer(player) {
      let tournament = player.get('tournament');
      tournament.get('players').removeObject(player);
      tournament.content.save().then(() => {
        player.destroyRecord();
      });
    }
  }
});
