import React from 'react';
import { connect } from 'react-redux';
import { startRemoveCitation } from '../actions/citations';

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
        dispatch(startRemoveCitation({ id }))
      }}><i className="fa fa-lg fa-trash" aria-hidden="true"></i></button>
    </div>
);

export default connect()(CitationListItem);