import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'round-add',
  actions: {
    addMatch() {
      let props = this.getProperties('player1', 'player2', 'score1', 'score2');

      this.set('score1', '');
      this.set('score2', '');

      this.attrs.onAdd(this.get('round'),
        props.player1,
        props.player2,
        props.score1,
        props.score2);
    }
  }
});
