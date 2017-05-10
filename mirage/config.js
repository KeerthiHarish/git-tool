// mirage/config.js
export default function() {
  this.namespace = 'api';

  this.get('/members', (schema) => {
    return schema.members.all();
  });

  this.get('/projects', ({projects}) => {
    return projects.all();
  });

  this.post('/projects', ({projects}, request) => {
    let project = projects.create(request);
    return project;
  })

  this.get('/members/:id', ({members}, request) => {
    return members.find(request.params.id);
  })

  this.patch('/projects/:id', ({projects}, request) => {
    let project = projects.find(request.params.id);
    project.update(request.requestBody);
    return project;
  })

}
