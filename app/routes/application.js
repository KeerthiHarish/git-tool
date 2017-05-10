import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      members: this.store.findAll('member'),
      projects: this.store.findAll('project')
    });
  },

  setupController: function(controller, models) {
    this._super(controller, models);
    controller.set('members', models.members);
    controller.set('projects', models.projects);
  },
});
