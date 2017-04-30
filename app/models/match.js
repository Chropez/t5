import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  player1: belongsTo('player'),
  player2: belongsTo('player'),
  player1Score: attr('number'),
  player2Score: attr('number')
});
