const floofs = (state = [], action) => {

    switch (action.type) {
        case 'SET_FLOOFS':
            return action.payload;
        default:
            return state;
    }
  }

  export default floofs;