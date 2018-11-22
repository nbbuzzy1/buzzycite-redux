import React from 'react';
import { connect } from 'react-redux';
import { addCitation } from '../actions/citations';
// import SaveModal from './SaveModal';

const SaveCitation = (props) => (
  <div>
    {props.fullCitation && <button 
      className="button"
      onClick={props.handleSaveCitation}>Save citation</button>}
  </div>
)

// const mapStateToProps = (state) => {
//   return {
//     citations: state.citations
//   }
// }

// if (props.fullCitation) {
//   props.dispatch(addCitation({ fullCitation: props.fullCitation, createdAt: props.createdAt }));
//   props.history.push('/CitationList');
// }

export default connect()(SaveCitation);