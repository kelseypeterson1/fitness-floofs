const newFloof = (state = '', action) => {

    switch (action.type) {
        case 'SET_NEW_FLOOF':
            console.log('in SET_NEW_FLOOF')
            return action.payload;
        case 'CLEAR_NEW_FLOOF':
            return '';
        default:
            return state;
    }
  }

  export default newFloof;