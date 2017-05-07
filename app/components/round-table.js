import Component from 'ember-component';
import service from 'ember-service/inject';
import computed from 'ember-computed';


export default Component.extend({
  scoreTable: service(),

  competitors: computed('round.matches.[]', 'players.[]', function() {
    let matches = this.get('round.matches');
    let players = this.get('players');

    return this.get('scoreTable')
            .getTable(matches, players)
            .get('competitorsSorted');

  })
});
