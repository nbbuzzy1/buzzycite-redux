import React from 'react';
import { connect } from 'react-redux';
import { addCitation } from '../actions/citations';

const SaveCitation = (props, { fullCitation }) => (
  <div>
    {props.citation && <button 
      onClick={() => {
        props.dispatch(addCitation({ fullCitation }))
      }}>Save citation</button>}
  </div>
)

const mapStateToProps = (state) => {
  return {
    citations: state.citations
  }
}

export default connect(mapStateToProps)(SaveCitation);