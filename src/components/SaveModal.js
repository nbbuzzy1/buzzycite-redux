import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addCitation } from '../actions/citations';

const SaveModal = (props) => (
  <Modal
    isOpen={!!props.saveCitation}
    onRequestClose={props.handleClearSaveCitation}
    contentLabel="Hello!"
    closeTimeoutMS={200}
    className="modal"
  >
    <p>{props.fullCitation}</p>
    <p>{props.createdAt}</p>
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
        props.dispatch(addCitation({ 
          fullCitation: props.fullCitation, 
          createdAt: props.createdAt, 
          type: props.type, 
          note: props.note 
        }));
        props.history.push('/CitationList');
      }}
    >Save</button>
  </Modal>
);

// if (props.fullCitation) {
//   props.dispatch(addCitation({ fullCitation: props.fullCitation, createdAt: props.createdAt }));
//   props.history.push('/CitationList');
// }

export default connect()(SaveModal);

// export default class SaveModal extends React.Component {
  // state = {
  //   partyOne: "",

  // };
  // handlePartyOne = (e) => {
  //   this.setState({
  //     partyOne: e.target.value
  //   })
  // }
//   render() {
//     return (
//       <div>
//         <Modal
//           isOpen={!!props.saveCitation}
//           onRequestClose={props.handleClearSaveCitation}
//           contentLabel="Hello!"
//           closeTimeoutMS={200}
//           className="modal"
//         >
//           <p>{props.fullCitation}</p>
//           <p>{props.createdAt}</p>
//           <input 
//             autoFocus 
//             className="text-input" 
//             type="text" 
//             id="type" 
//             placeholder="Add Type (Optional)"
//             onChange={(e) => {
//               userType = e.target.value;
//             }}
//           />
//           <textarea
//             id="textarea"
//             placeholder="Add Note (Optional)"
//           >
//           </textarea>
//           <button className="button">Okay</button>
//         </Modal>
//       </div>
//     );
//   }
// }

