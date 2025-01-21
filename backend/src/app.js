const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const v1Routes = require('./routes/routes');
const connectDB = require('./config/db');

const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

let swaggerDocument;
try {
    const file = fs.readFileSync('./swagger.yaml', 'utf8');
    swaggerDocument = YAML.parse(file);
} catch (error) {
    console.error('Error loading Swagger YAML file:', error.message);
    process.exit(1); // Exit process if Swagger YAML file fails to load
}

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database Connection
connectDB();

// V1 Routes
app.use('/v1', v1Routes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
