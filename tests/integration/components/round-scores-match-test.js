import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('round-scores-match', 'Integration | Component | round scores match', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{round-scores-match}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#round-scores-match}}
      template block text
    {{/round-scores-match}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
