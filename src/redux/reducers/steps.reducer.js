const steps = (state = {steps: 0}, action) => {

    switch (action.type) {
        case 'SET_STEPS':
            return action.payload;
        default:
            return state;
    }
  }

  export default steps;