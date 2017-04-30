import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      let player = this.getProperties('name', 'nickname', 'imageUrl');
      this.attrs.onSave(player);
    }
  }
});
