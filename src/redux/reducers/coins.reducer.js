const coins = (state = 0, action) => {

    switch (action.type) {
        case 'SET_COINS':
            // console.log('in reducer', action.type);
            // console.log('reducer sending', action.payload);
            return action.payload;
        default:
            return state;
    }
  }

  export default coins;