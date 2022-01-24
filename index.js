const express = require('express')
const app = express()
const body_parser = require('body-parser')
const db_conection = require('./db/conection')
const cors = require('cors');
const PORT = process.env.PORT || 4500
const controller_project = require('./controllers/projects/projects')
const path = require('path')
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json())
db_conection.connection()
app.use(cors());

//// ROUTES
const routes = require('./routes/index.routes')
app.use("/images", express.static(path.join(__dirname, '/db/assets')));
app.use('/api', routes.projects);

controller_project.createDB()

app.listen(PORT,() => {
    console.log(`Servidor corriendo en: https://localhost:${PORT}`);
});

