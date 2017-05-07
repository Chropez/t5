import Object from 'ember-object';
import { A } from 'ember-array/utils';
import computed, { collect, sum, sort } from 'ember-computed';

const Competitor = Object.extend({
  id: '',
  name: '',
  wins: 0,
  losses: 0,
  draws: 0,

  playedCollection: collect('wins', 'losses', 'draws'),
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
      this.incrementProperty('draws');
      return;
    }

    if (scored > conceeded) {
      this.incrementProperty('wins');
      return;
    }

    this.incrementProperty('losses');
  }

});

const Table = Object.extend({
  //competitors: A(),
  competitorsSortedBy: ['wins:desc'],
  competitorsSorted: sort('competitors', 'competitorsSortedBy'),

  addMatch(competitor1, competitor1Score, competitor2, competitor2Score) {
    competitor1 = this.addOrGetCompetitor(competitor1);
    competitor2 = this.addOrGetCompetitor(competitor2);

    competitor1.addMatch(competitor1Score, competitor2Score);
    competitor2.addMatch(competitor2Score, competitor1Score);
  },

  addOrGetCompetitor(competitor) {
    let competitors = this.get('competitors')

    let tableCompetitor;

    if (competitors) {
      tableCompetitor = competitors.findBy('id', competitor.get('id'));
    } else {
      competitors = A(),
      this.set('competitors', competitors);
    }

    if (tableCompetitor) {
      return tableCompetitor;
    }

    competitors.pushObject(competitor);
    return competitor;
  }
});

export { Competitor };
export default Table;


