import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service('auth'),

  beforeModel(transition) {
    let authService = this.get('auth');
    if (!authService.get('isLoggedIn')) {
      authService.set('retryTransition', transition);
      this.transitionTo('login');
    }
  }
});
