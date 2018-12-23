import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startAddCitation } from '../actions/citations';

const SaveModal = (props) => (
  <Modal
    isOpen={props.saveCitation}
    onRequestClose={props.handleClearSaveCitation}
    contentLabel="SaveModal"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <h3>{props.fullCitation}</h3>
    <h3>{props.createdAtDisplay}</h3>
    <input 
      autoFocus 
      className="text-input" 
      type="text" 
      id="type" 
      placeholder="Add Type (Optional)"
      onChange={props.handleAddType}
    />
    <textarea
      id="textarea"
      className="text-input" 
      placeholder="Add Note (Optional)"
      onChange={props.handleAddNote}
    >
    </textarea>
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
  </Modal>
);

export default connect()(SaveModal);