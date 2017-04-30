import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    if (this.attrs.onClick)
      this.attrs.onClick();
  }
});
