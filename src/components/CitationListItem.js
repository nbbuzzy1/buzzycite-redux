import React from 'react';
import { connect } from 'react-redux';
import { removeCitation } from '../actions/citations';

const CitationListItem = ({ dispatch, fullCitation, id, type, note, createdAt }) => (
  <div>
      <h3>{fullCitation} {createdAt} {type}{note}</h3> 
      <button onClick={() => {
        dispatch(removeCitation({ id }))
      }}>Remove</button>
  </div>
);

// <input 
// autoFocus 
// className="text-input" 
// type="text" 
// id="type" 
// placeholder="Type" 
// onChange={(e) => {
//   let userValue = e.target.value;
//   dispatch(addType({type: userValue}))
// }}
// />

export default connect()(CitationListItem);