export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByType = () => ({
  type: 'SORT_BY_TYPE'
});