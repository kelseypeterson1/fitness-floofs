import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import egg from './egg.reducer';
import steps from './steps.reducer';
import flock from './flock.reducer';
import floofs from './floofs.reducer';
import selectedFloof from './selectedFloof.reducer';
import newFloof from './newFloof.reducer';
import coins from './coins.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  egg, // will have daily egg type for user
  steps, // will have current number of steps for user
  flock, // will have the floofs in user's flock
  floofs, // will have a list of all types of floofs
  selectedFloof, // will have data on selected floof
  newFloof, // will have data on new floof if one is hatched
  coins, // will have current coins for user
});

export default rootReducer;
