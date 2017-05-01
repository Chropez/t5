import Component from 'ember-component';
import service from 'ember-service/inject';

import computed, { alias } from 'ember-computed';

export default Component.extend({
  router: service('-routing'),
  scoreTable: service(),

  matches: alias('round.matches'),

  winner: computed('matches.@each.player1Score',
    'matches.@each.player2Score',
    function() {
      let matches = this.get('matches');
      let table = this.get('scoreTable').getTable(matches)
      return table.get('competitorsSorted.firstObject.player');
  }),


  // winner: alias('table.competitorsSorted.firstObject.player'),

  click() {
    let round = this.get('round');
    this.get('router').transitionTo('rounds.round', [ round.id ]);
  }
});
