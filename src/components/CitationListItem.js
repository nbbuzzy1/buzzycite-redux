import React from 'react';
import { connect } from 'react-redux';
import { removeCitation } from '../actions/citations';

const CitationListItem = ({ dispatch, fullCitation, id, type, note, createdAt }) => (
  <div>
      <h3>{fullCitation}  {type}  {note}  {createdAt}</h3>
      <button onClick={() => {
        dispatch(removeCitation({ id }))
      }}>Remove</button>
  </div>
);

export default connect()(CitationListItem);