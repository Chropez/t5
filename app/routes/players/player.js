import Ember from 'ember';

export default Ember.Route.extend({
  model({ player_id }) {
    return this.store.findRecord('player', player_id);
  },
  goBack() {
    this.transitionTo('players');
  },
  actions: {
    save(playerProps) {
      let player = this.modelFor('players.player');
      player.setProperties(playerProps);
      player.save().then(() => {
        this.goBack();
      });
    },
    cancel() {
      this.goBack();
    }
  }
});

