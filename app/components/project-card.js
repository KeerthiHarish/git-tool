import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addMember(member, targetHash) {
      let project = targetHash.target.project;
      if(!project.get('projectMembers').includes(member.get('name'))) {
        project.set('projectMembers', project.get('projectMembers') + ',' + member.get('name'));
        project.save();
      }
    }
  }
})
