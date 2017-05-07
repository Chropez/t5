import Service from 'ember-service';
import { isEmpty } from 'ember-utils';
import ScoreTable, { Competitor } from '../utils/score-table';

export default Service.extend({
  getTable(matches, players) {

    let table = ScoreTable.create();

    if (!isEmpty(players)) {
      players.forEach(player => {
        let competitor = this._createCompetitorFromPlayer(player);
        table.addOrGetCompetitor(competitor);
      });

    }

    if (isEmpty(matches)) {
      return table;
    }

    matches.forEach((match) => {
      let { player1, player2, player1Score, player2Score } =
        match.getProperties('player1', 'player2', 'player1Score', 'player2Score');

      let competitor1 = this._createCompetitorFromPlayer(player1);
      let competitor2 = this._createCompetitorFromPlayer(player2);
      table.addMatch(competitor1, player1Score, competitor2, player2Score);
    });

    return table;
  },

  _createCompetitorFromPlayer(player) {
    return Competitor.create({
      id: player.get('id'),
      player: player,
      name: player.get('nickname'),
    });
  }
});
