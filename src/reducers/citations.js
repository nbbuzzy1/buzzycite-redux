// Cases Reducer

const citationsReducerDefaultState = [];

export default (state = citationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CITATION':
      return [
        ...state,
        action.citation
      ];
    case 'REMOVE_CITATION':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_CITATIONS':
      return action.citations;
    default:
      return state;
  }
};