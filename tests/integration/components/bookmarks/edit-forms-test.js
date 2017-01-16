import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bookmarks/edit-forms', 'Integration | Component | bookmarks/edit forms', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bookmarks/edit-forms}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bookmarks/edit-forms}}
      template block text
    {{/bookmarks/edit-forms}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
