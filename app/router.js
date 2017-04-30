import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('players', function() {
    this.route('new');
    this.route('player', { path: ':player_id' });
  });

  this.route('rounds', function() {
    this.route('round', { path: ':round_id' });
  });
  this.route('tournament');
});

export default Router;
