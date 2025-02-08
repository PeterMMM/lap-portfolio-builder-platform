const { Project, Chunk } = require('../models/ProjectData');

const createProject = async (projectData) => {
    return await Project.create(projectData);
};

const deleteProject = async (projectId) => {
    await Chunk.deleteMany({ project_id: projectId });
    return await Project.findByIdAndDelete(projectId);
};


module.exports = {
    createProject,
    deleteProject,
};
