const egg = (state = '', action) => {

    switch (action.type) {
        case 'SET_EGG':
            // console.log('in reducer', action.type);
            // console.log('reducer sending', action.payload);
            return action.payload.egg_id;
        default:
            return state;
    }
  }

  export default egg;