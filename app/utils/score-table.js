import Object from 'ember-object';
import { A } from 'ember-array/utils';
import computed, { collect, sum, sort } from 'ember-computed';

let Competitor = Object.extend({
  id: "",
  name: "",
  wins: 0,
  losses: 0,
  ties: 0,

  playedCollection: collect('wins', 'losses', 'ties'),
  played: sum('playedCollection'),

  scored: 0,
  conceeded: 0,
  scoreDifference: computed('scored', 'conceeded', function() {
    let scored = this.get('scored');
    let conceeded = this.get('conceeded');
    return scored - conceeded;
  }),

  addMatch(scored, conceeded) {
    this.incrementProperty('scored', scored);
    this.incrementProperty('conceeded', conceeded);

    if (scored === conceeded) {
      this.incrementProperty('ties');
      return;
    }
    if (scored > conceeded) {
      this.incrementProperty('wins');
      return;
    }

    this.incrementProperty('losses');
  }

});

export default Object.extend({
  competitors: A(),
  competitorsSortedBy: ['wins:desc'],
  competitorsSorted: sort('competitors', 'competitorsSortedBy'),

  addMatch(competitor1, competitor1Score, competitor2, competitor2Score) {
    competitor1 = this._addOrGetCompetitor(competitor1);
    competitor2 = this._addOrGetCompetitor(competitor2);

    competitor1.addMatch(competitor1Score, competitor2Score);
    competitor2.addMatch(competitor2Score, competitor1Score);
  },

  _addOrGetCompetitor(competitor) {
    let competitors = this.get('competitors')
    let tableCompetitor = competitors.findBy('id', competitor.get('id'));

    if (tableCompetitor) {
      return tableCompetitor;
    }

    competitors.pushObject(competitor);
    return competitor;
  }
});

export { Competitor };

