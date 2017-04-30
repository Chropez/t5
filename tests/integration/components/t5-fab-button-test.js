import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t5-fab-button', 'Integration | Component | t5 fab button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t5-fab-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t5-fab-button}}
      template block text
    {{/t5-fab-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
