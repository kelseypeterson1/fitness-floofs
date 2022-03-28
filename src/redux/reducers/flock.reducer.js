const flock = (state = [], action) => {

    switch (action.type) {
        case 'SET_FLOCK':
            return action.payload;
        default:
            return state;
    }
  }

  export default flock;