import React from 'react';
import { connect } from 'react-redux';
import { startAddCitation } from '../actions/citations';

const CustomCitationButton = (props) => (
  <button 
    className="button"
    onClick={() => {
      props.dispatch(startAddCitation({ 
        fullCitation: props.fullCitation, 
        createdAt: props.createdAt, 
        createdAtDisplay: props.createdAtDisplay,
        type: props.type, 
        note: props.note 
      }));
      props.history.push('/CitationList');
    }}
  >Save</button>
);

export default connect()(CustomCitationButton);