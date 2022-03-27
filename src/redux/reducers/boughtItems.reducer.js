const coins = (state = [], action) => {

    switch (action.type) {
        case 'SET_BOUGHT_ITEMS':
            return action.payload;
        default:
            return state;
    }
  }

  export default coins;