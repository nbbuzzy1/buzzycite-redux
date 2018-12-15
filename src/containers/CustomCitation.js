import React from 'react';
import moment from 'moment';
import CustomCitationButton from '../components/CustomCitationButton';
import { connect } from 'react-redux';

class CustomCitation extends React.Component {
  state = {
    fullCitation: "",
    createdAt: "",
    saveCitation: false,
    type: "None",
    note: "None"
  };
  handleFullCitation = (e) => {
    const now = moment().format('MMM D, YYYY').toString();
    this.setState({
      fullCitation: e.target.value,
      createdAt: now
    });
  };
  handleAddType = (e) => {
    this.setState({
      type: e.target.value
    });
  };
  handleAddNote = (e) => {
    this.setState({
      note: e.target.value
    });
  };
  handleStartCitation = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="content-container">
        <div>
          <h2>Custom Citation</h2>
        </div>
        <input 
          autoFocus 
          className="text-input" 
          type="text" 
          placeholder="Enter Custom Citation" 
          onChange={this.handleFullCitation} 
        />
        <input  
          className="text-input" 
          type="text" 
          id="type" 
          placeholder="Add Type (Optional)"
          onChange={this.handleAddType}
        />
        <textarea
          className="text-input"
          id="textarea" 
          placeholder="Add Note (Optional)"
          onChange={this.handleAddNote}
        >
        </textarea>
        <CustomCitationButton 
          fullCitation={this.state.fullCitation}
          createdAt={this.state.createdAt}
          type={this.state.type}
          note={this.state.note}
          dispatch={this.props.dispatch}
          history={this.props.history}
        />
      </div>
    );
  };
};

export default connect()(CustomCitation);