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
    case 'EDIT_CITATION':
      return state.map((citation) => {
        if (citation.id === action.id) {
          return {
            ...citation,
            ...action.updates
          };
        } else {
          return citation;
        };
      });
    default:
      return state;
  }
};