const steps = (state = {steps: 0}, action) => {

    switch (action.type) {
        case 'SET_STEPS':
            // console.log('in reducer', action.type);
            // console.log('reducer sending', action.payload);
            return action.payload;
        default:
            return state;
    }
  }

  export default steps;