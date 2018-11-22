import React from 'react';
import { connect } from 'react-redux';
import { addType, removeCitation } from '../actions/citations';

const CitationListItem = ({ dispatch, fullCitation, id, type, note, createdAt }) => (
  <div>
      <h3>{fullCitation}  {type}  {note}  {createdAt}</h3>
      <input 
        autoFocus 
        className="text-input" 
        type="text" 
        id="type" 
        placeholder="Type" 
        onChange={(e) => {
          let userValue = e.target.value;
          dispatch(addType({type: userValue}))
        }}
      />
      <button onClick={() => {
        dispatch(removeCitation({ id }))
      }}>Remove</button>
  </div>
);

export default connect()(CitationListItem);