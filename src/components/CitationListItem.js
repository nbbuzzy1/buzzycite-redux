import React from 'react';
import { connect } from 'react-redux';
import { removeCitation } from '../actions/citations';

const CitationListItem = ({ dispatch, fullCitation, id, type, note, createdAt }) => (
  <div className="citation-container">
    <div className="citation">
      {fullCitation}
    </div>
    <div className="citation__date">
      {createdAt}
    </div>
    <div className="citation__type">
      {type}
    </div>
    <div className="citation__note">
      {note}
    </div>
    <button className="citation__button" onClick={() => {
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