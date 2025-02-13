// start app with nodemon: npm run dev

const express = require('express');
// Create Express application
const app = express();

// Configuration constants
const PORT = 3000;
const VIEW_ENGINE = 'ejs';
const VIEWS_DIR = './views';


// View engine setup
app.set('views', VIEWS_DIR);
app.set('view engine', VIEW_ENGINE);
app.use(express.static('public'));

const homeRoutes = require('./routes/home');
app.use(homeRoutes);

const calculationRoutes = require('./routes/calculations');
app.use(calculationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});