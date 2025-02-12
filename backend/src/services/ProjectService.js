const projectDao = require('../dao/ProjectDao');

// Create a new project
const createProject = async (projectData) => {
    return await projectDao.createProject(projectData);
};

// Get project by ID
const getProjectById = async (projectId) => {
    const project = await projectDao.getProjectById(projectId);
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
};

// Get all projects
const getAllProjects = async () => {
    return await projectDao.getAllProjects();
};

// Update a project
const updateProject = async (projectId, updatedData) => {
    const updatedProject = await projectDao.updateProject(projectId, updatedData);
    if (!updatedProject) {
        throw new Error('Project not found');
    }
    return updatedProject;
};

// Delete a project
const deleteProject = async (projectId) => {
    const project = await projectDao.deleteProject(projectId);
    if (!project) {
        throw new Error('Project not found');
    }
    return { message: 'Project deleted successfully' };
};

module.exports = {
    createProject,
    getProjectById,
    getAllProjects,
    updateProject,
    deleteProject,
};