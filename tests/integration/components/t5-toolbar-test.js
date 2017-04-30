import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t5-toolbar', 'Integration | Component | t5 toolbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t5-toolbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t5-toolbar}}
      template block text
    {{/t5-toolbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
