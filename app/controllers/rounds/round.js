import Controller from 'ember-controller';
import computed, { alias } from 'ember-computed';

export default Controller.extend({
  round: alias('model.round'),
  date: alias('round.date'),

  toolbarTitle: computed('date', function() {
    let date = this.get('date');
    return `Round - ${date}`;
  })
});
