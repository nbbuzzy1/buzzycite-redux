import React from 'react';
import { connect } from 'react-redux';
import { addCitation } from '../actions/citations';

const SaveCitation = (props) => (
  <div>
    {props.fullCitation && <button 
      className="button"
      onClick={() => {
        if (props.fullCitation) {
          props.dispatch(addCitation({ fullCitation: props.fullCitation, createdAt: props.createdAt }));
          props.history.push('/CitationList');
        }
      }}>Save citation</button>}
  </div>
)

// const mapStateToProps = (state) => {
//   return {
//     citations: state.citations
//   }
// }

export default connect()(SaveCitation);