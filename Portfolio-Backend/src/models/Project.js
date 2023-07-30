const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    data: Buffer,
    contentType: String
  }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
