// app.js
import express from 'express';
// Create Express application
const app = express();

// Configuration constants
const PORT = 3000;
const VIEW_ENGINE = 'ejs';
const VIEWS_DIR = './views';

// Data generation function
const testDataFunction = () => {};

// View engine setup
app.set('views', VIEWS_DIR);
app.set('view engine', VIEW_ENGINE);

/*  */
// Routes
app.get('/', (req, res) => {

  res.render('index', {
    title: 'Tensile Test',
    labels,
    forces: data,
    strains,
    stresses
  });
});
/* 
app.use(express.static('public')); */

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


export default app;