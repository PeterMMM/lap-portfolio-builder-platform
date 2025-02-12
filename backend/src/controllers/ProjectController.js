const projectService = require('../services/ProjectService');

// Create a project
exports.createProject = async (req, res) => {
    const { project_name, description, user_id, file_size, chunk_size, check_sum } = req.body;

    try {
        const newProject = await projectService.createProject({
            project_name,
            description,
            user_id,
            file_size,
            chunk_size,
            check_sum,
        });
        return res.status(201).json({
            message: 'Project created successfully',
            data: newProject,
        });
    } catch (error) {
        return res.status(500).json({
            message: `Error creating project: ${error.message}`,
        });
    }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await projectService.getProjectById(id);
        return res.status(200).json(project);
    } catch (error) {
        return res.status(404).json({
            message: `Error fetching project: ${error.message}`,
        });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).json({
            message: `Error fetching projects: ${error.message}`,
        });
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedProject = await projectService.updateProject(id, updatedData);
        return res.status(200).json({
            message: 'Project updated successfully',
            data: updatedProject,
        });
    } catch (error) {
        return res.status(404).json({
            message: `Error updating project: ${error.message}`,
        });
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await projectService.deleteProject(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: `Error deleting project: ${error.message}`,
        });
    }
};