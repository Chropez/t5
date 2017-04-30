import Component from 'ember-component';
import service from 'ember-service/inject';


export default Component.extend({
  router: service('-routing'),
  click() {
    let round = this.get('round');
    this.get('router').transitionTo('rounds.round', [ round.id ]);
  }
});
