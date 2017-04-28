import Ember from 'ember';

export default Ember.Service.extend({
  isLoggedIn: false,

  login() {
    this.set('isLoggedIn', true);

    Ember.run.later(() => {
      let retryTransition = this.get('retryTransition');
      if (retryTransition) {
        retryTransition.retry();
        this.set('retryTransition', null);
      } else {
        // Go to default.
        let router = Ember.getOwner(this).lookup('router:main');
        router.transitionTo('authenticated.users');
      }
    }, 1);
  }
});
