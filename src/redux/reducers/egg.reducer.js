const egg = (state = '', action) => {

    switch (action.type) {
        case 'SET_EGG':
            return action.payload;
        default:
            return state;
    }
  }

  export default egg;