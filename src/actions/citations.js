import uuid from 'uuid'
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// component calls action generator
// action generator returns a function
// component dispatches function
// redux store changes

// ADD_CASE
export const addCitation = (citation) => ({
  type: 'ADD_CITATION',
  citation
});

export const startAddCitation = (citationData = {}) => {
  return (dispatch) => {
    const {
      fullCitation = '',
      type = '',
      note = '',
      createdAt = 0
    } = citationData;
    const citation = { fullCitation, type, note, createdAt }
    database.ref('citations').push(citation).then((ref) => {
      dispatch(addCitation({
        id: ref.key,
        ...citation
      }))
    })
  }
}

// export const addType = (
//   {
//     type = ''
//   } = {}
// ) => ({
//   type: 'ADD_TYPE',
//   citation: {
//     type
//   }
// })


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