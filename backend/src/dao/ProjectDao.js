const { Project, Chunk } = require('../models/ProjectData');

const createProject = async (projectData) => {
    return await Project.create(projectData);
};

const getProjectById = async (projectId) => {
    return await Project.findById(projectId);
};

const getAllProjects = async () => {
    return await Project.find();
};

const updateProject = async (projectId, updatedData) => {
    return await Project.findByIdAndUpdate(projectId, updatedData, { new: true });
};

const deleteProject = async (projectId) => {
    await Chunk.deleteMany({ project_id: projectId });
    return await Project.findByIdAndDelete(projectId);
};

module.exports = {
    createProject,
    getProjectById,
    getAllProjects,
    updateProject,
    deleteProject,
};