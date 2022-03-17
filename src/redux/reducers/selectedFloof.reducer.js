const selectedFloof = (state = [], action) => {

    switch (action.type) {
        case 'SET_SELECTED_FLOOF':
            return action.payload;
        default:
            return state;
    }
  }

  export default selectedFloof;