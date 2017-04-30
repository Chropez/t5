import Controller from 'ember-controller';
import moment from 'moment';

export default Controller.extend({
  showDialog: false,

  actions: {
    newRound() {
      let date = moment().format('YYYY-MM-DD');
      this.set('date', date);
      this.set('showDialog', true);
    },

    hideDialog() {
      this.set('showDialog', false);
    },

    createRound(date) {
      let tournament = this.get('model');

      let round = this.store.createRecord('round', {
        tournament,
        date
      });

      tournament.get('rounds').pushObject(round);

      round.save().then(() => {
        tournament.save().then(() => {
          this.set('showDialog', false);
          this.transitionToRoute('rounds.round', round);
        });
      });
    }
  }
});
