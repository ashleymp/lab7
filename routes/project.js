var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project and
  models.Project
    .find({"_id":projectID})
  // call the following callback
    .exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  var newProject = new models.Project(form_data);
  newProject.save(afterSaving);
  // YOU MUST send an OK response w/ res.send();
  function afterSaving(err) {
    if(err) console.log(err);
    res.send();
  }
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  models.Project
    .find({"_id":projectID})
    .remove()
    .exec(afterRemoving);

    function afterRemoving(err){
      if(err) console.log(err);
      res.send()
    }
  // YOU MUST send an OK response w/ res.send();
}