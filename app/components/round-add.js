import Ember from 'ember';
import { isEmpty } from 'ember-utils';

export default Ember.Component.extend({
  classNames: 'round-add',
  actions: {
    addMatch() {
      let { player1, player2, score1, score2 } = this.getProperties('player1', 'player2', 'score1', 'score2');

      if (isEmpty(player1) || isEmpty(score1) || isEmpty(player2) || isEmpty(score2)) {
        return;
      }

      this.set('score1', '');
      this.set('score2', '');

      this.attrs.onAdd(this.get('round'), player1, player2, score1, score2);
    }
  }
});
