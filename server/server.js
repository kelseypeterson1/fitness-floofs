const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const eggRouter = require('./routes/egg.router');
const stepsRouter = require('./routes/steps.router');
const googleRouter = require('./routes/google.router');
const flockRouter = require('./routes/flock.router');
const floofsRouter = require('./routes/floofs.router');
const eggToFloofRouter = require('./routes/eggToFloof.router');
const traits = require('./routes/traits.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Google api middleware
app.use(cors());

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/egg', eggRouter);
app.use('/steps', stepsRouter);
app.use('/api/google', googleRouter);
app.use('/flock', flockRouter);
app.use('/floofs', floofsRouter);
app.use('/egg-to-floof', eggToFloofRouter);
app.use('/traits', traits);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
