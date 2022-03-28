const coins = (state = 0, action) => {

    switch (action.type) {
        case 'SET_COINS':
            return action.payload;
        default:
            return state;
    }
  }

  export default coins;