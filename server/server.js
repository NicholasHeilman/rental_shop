const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
require('dotenv').config();


// Route includes
const userRouter = require('./routes/user.router');
const toolRouter = require('./routes/tool.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Passport Session Configuration //
// app.use(sessionMiddleware);

// start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/tool', toolRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});