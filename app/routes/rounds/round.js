import Ember from 'ember';

export default Ember.Route.extend({
  model({ round_id }) {
    return this.store.findRecord('round', round_id);
  },

  actions: {
    onBack() {
      this.transitionTo('tournament');
    }
  }
});
