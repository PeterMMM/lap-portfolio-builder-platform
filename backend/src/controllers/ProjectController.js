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

