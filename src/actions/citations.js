import uuid from 'uuid'

// ADD_CASE
export const addCitation = (
  {
    fullCitation = '',
    type = '',
    note = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_CITATION',
  citation: {
    id: uuid(),
    fullCitation,
    type,
    note,
    createdAt
  }
});

// REMOVE_CASE
export const removeCitation = ({ id } = {}) => ({
  type: 'REMOVE_CITATION',
  id
});

// EDIT_CASE
export const editCitation = (id, updates) => ({
  type: 'EDIT_CITATION',
  id,
  updates
});