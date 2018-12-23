import database from '../firebase/firebase';

export const addCitation = (citation) => ({
  type: 'ADD_CITATION',
  citation
});

export const startAddCitation = (citationData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      fullCitation = '',
      type = '',
      note = '',
      createdAtDisplay = '',
      createdAt = 0
    } = citationData;
    const citation = { fullCitation, type, note, createdAt, createdAtDisplay }
    database.ref(`users/${uid}/citations`).push(citation).then((ref) => {
      dispatch(addCitation({
        id: ref.key,
        ...citation
      }));
    });
  };
};

export const removeCitation = ({ id } = {}) => ({
  type: 'REMOVE_CITATION',
  id
});

export const startRemoveCitation = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/citations/${id}`).remove().then(() => {
      dispatch(removeCitation({ id }))
    });
  };
};

export const setCitations = (citations) => ({
  type: 'SET_CITATIONS',
  citations
});

export const startSetCitations = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/citations`).once('value').then((snapshot) => {
      const citations = [];
      snapshot.forEach((childSnapshot) => {
        citations.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setCitations(citations));
    });
  };
};