import Ember from 'ember';

let $ = Ember.$;

export default Ember.Component.extend({

  tagName: "",

  actions: {
    createProject() {
      let project = this.store.createRecord('project');
      if(this.get('projectName')) {
        project.name= this.get('projectName');
        project.description = this.get('projectDesc');
        project.save().then(() => {
          this.set('projectName', '');
          this.set('projectDesc', '');
          $("#modal-dialog").modal('hide')
        })
      } else {
        alert("Pleas enter a project name");
      }
    }
  }
});
