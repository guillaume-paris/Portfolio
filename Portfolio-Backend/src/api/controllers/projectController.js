const ProjectModel = require('../../models/Project');
const MAX_IMAGE_SIZE = 524288; // (0.5 MB)
const multer = require('multer');
const upload = multer({ 
  limits: { fileSize: MAX_IMAGE_SIZE },
  storage: multer.memoryStorage() 
});

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    
    const formattedProjects = projects.map(project => {
      if (project.img.data) {
        const buffer = Buffer.isBuffer(project.img.data) ? project.img.data : Buffer.from(project.img.data);
        const base64 = buffer.toString('base64');
        return {
          ...project._doc,
          img: {
            data: base64,
            contentType: project.img.contentType,
          },
        };
      }
      return project;
    });

    res.status(200).json(formattedProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }
    res.status(200).json(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createProject = async (req, res) => {
  const project = new ProjectModel({
    title: req.body.title,
    description: req.body.description
  });

  if (req.file) {
    project.img = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };
  }

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    
    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }
    if (req.body.img && req.body.img.data.length > MAX_IMAGE_SIZE) {
      return res.status(400).json({ message: 'Image file is too large. Maximum size is 500KB.' });
    }

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }

    await ProjectModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  upload
};
