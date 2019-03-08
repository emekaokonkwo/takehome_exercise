const initialState = {
  cats: [],
  index: 0,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CATS':
      return {
        ...state,
        cats: action.payload
      }
    case 'NEXT_CAT': {
      let newIndex = state.index + 1;
      if (newIndex > state.cats.length - 1) newIndex = 0;
      return {
        ...state,
        index: newIndex
      }
    }
    case 'PREV_CAT': {
      let newIndex = state.index - 1;
      if (newIndex < 0) newIndex = state.cats.length - 1;
      return {
        ...state,
        index: newIndex
      }
    }
    default:
      return state
  }
}
