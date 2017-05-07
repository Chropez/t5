import Component from 'ember-component';
import service from 'ember-service/inject';
import { isEmpty } from 'ember-utils';

import computed, { alias, sort } from 'ember-computed';

export default Component.extend({
  router: service('-routing'),
  scoreTable: service(),

  matches: alias('round.matches'),

  winner: computed('matches.@each.winner', function() {
      let matches = this.get('matches');
      if (isEmpty(matches)) {
        return ;
      }

      let table = this.get('scoreTable').getTable(matches)
      //return table;
      return table.get('competitorsSorted.firstObject.player');
  }),

  click() {
    let round = this.get('round');
    this.get('router').transitionTo('rounds.round', [ round.id ]);
  }
});
