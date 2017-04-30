import Ember from 'ember';

export default Ember.Route.extend({
  goBack() {
    this.transitionTo('players');
  },
  actions: {
    save(playerProps){
      let player = this.store.createRecord('player', playerProps);
      this.store.findRecord('tournament', 'ttttt').then((tournament) => {
        tournament.get('players').pushObject(player);
        player.set('tournament', tournament);
        player.save().then(() => {
          tournament.save().then(() => {
            this.goBack();
          });
        });
      });
    },

    onBack() {
      this.goBack();
    },

    cancel() {
      this.goBack();
    }
  }
});
