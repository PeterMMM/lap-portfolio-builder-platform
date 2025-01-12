const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const v1Routes = require('./routes/routes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

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
