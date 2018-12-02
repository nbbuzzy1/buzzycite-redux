import React from 'react';
import { connect } from 'react-redux';

const SaveCitation = (props) => (
  <div>
    {props.fullCitation && <button 
      className="button button--save"
      onClick={props.handleSaveCitation}>Save citation</button>}
  </div>
);

export default connect()(SaveCitation);