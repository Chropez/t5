import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSave() {
      this.attrs.onSave(this.get('date'));
    }
  }
});
