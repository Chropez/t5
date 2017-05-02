import Route from 'ember-route';
import Ember from 'ember';

const {
  RSVP: { all, resolve }
} = Ember;

const tournamentName = 'ttttt';

export default Route.extend({
  beforeModel() {
    this.transitionTo('tournament');
  },

  model() {
    return this.store.findRecord('tournament', tournamentName).then((tournament) => {
      return resolve(tournament);
    }).catch(() => {
      //console.log('tournament:' + tournament);
      this.initializeTestdata();
    });
  },

  afterModel() {
    return all([
      this.store.query('player', {
        orderBy: 'tournament',
        equalTo: tournamentName
      })
    ]);
  },

  initializeTestdata() {
    let tournament = this.store.createRecord('tournament',
        { id: tournamentName, name: 'TeamTech Table Tennis Tournament'}).save();

    return tournament;
  }
});
