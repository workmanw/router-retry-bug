import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service('auth'),

  actions: {
    login() {
      this.get('auth').login();
    }
  }
});
