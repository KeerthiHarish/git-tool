import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    addMember(member, targetHash) {
      let project = targetHash.target.project;
      if(!project.get('projectMembers').includes(member.get('name'))) {
        project.set('projectMembers', project.get('projectMembers') + ',' + member.get('name'));
        project.save().then(() => {
          this.get('flashMessages').success(member.get('name') + ' added to ' + project.get('name'));
        });
      }
    }
  }
})
