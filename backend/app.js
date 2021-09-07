const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Couteau suisse ajoutant 11 middlewares de sécurité pour les headers HTTP 
// On utilise helmet pour plusieurs raisons notamment la mise en place du X-XSS-Protection afin d'activer le filtre de script intersites(XSS) dans les navigateurs web)
const cors = require('cors');
const rateLimit = require('express-rate-limit'); // Protection contre les techniques brute force en déterminant un nombre de requêtes maximum sur une période de temps prédéterminée.

// Constante à utiliser avec le package rateLimit
const limiter = rateLimit({         
    windowMs: 15 * 60 * 1000,       // = 15 minutes
    max: 100
  })


const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Securité et data
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);


module.exports = app;