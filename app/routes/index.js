import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service('auth'),

  actions: {
    goToUserList() {
      let authService = this.get('auth');
      authService.set('isLoggedIn', true);
      this.transitionTo('authenticated.users');
    }
  }
});
