const projectDao = require('../dao/ProjectDao');

// Create a new project
const createProject = async (projectData) => {
    return await projectDao.createProject(projectData);
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
    deleteProject,
};
