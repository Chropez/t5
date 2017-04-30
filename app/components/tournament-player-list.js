import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  router: service('-routing'),
  actions: {
    goToPlayer(player) {
      this.get('router').transitionTo('players.player', [ player ]);
    }
  }
});
