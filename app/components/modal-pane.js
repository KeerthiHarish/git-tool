import Ember from 'ember';

let $ = Ember.$;

export default Ember.Component.extend({

  tagName: "",

  actions: {
    createProject() {
      let project = this.store.createRecord('project');
      project.name= this.get('projectName');
      project.description = this.get('projectDesc');
      project.save().then(() => {
        $("#modal-dialog").modal('hide')
      })
    }
  }
});
