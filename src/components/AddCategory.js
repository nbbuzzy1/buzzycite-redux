import React from 'react';
import { connect } from 'react-redux';

class AddType extends React.Component {
  state = {
    type: ''
  };
  handleAddType = (e) => {
    this.setState({
      type: e.target.value
    })
    dispatch(addCitation(({type: this.state.type})))
  }
  render() {
    return (
      <div>
        <input 
          value={props.partyOne} 
          autoFocus 
          className="text-input" 
          type="text" 
          id="type" 
          placeholder="Type" 
          onChange={this.handleAddType}
        />
      </div>
    );
  }
}

export default connect()(AddType);