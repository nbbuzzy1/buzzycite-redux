import React from 'react';
import term from '../term';

class AbbreviateTerm extends React.Component {
  state = {
    fullTerm: "",
    abbTerm: ""
  };
  handleAddTerm = (e) => {
    this.setState({
      fullTerm: e.target.value
    });
  };
  handleAbbreviateTerm = () => {
    const fullTerm = this.state.fullTerm;
    let abbreviateTerm = "";
    for (let i = 0; i < term.length; i++) {
      if (fullTerm.toLowerCase().trim() === term[i].fullTerm) {
        abbreviateTerm = term[i].abbTerm;
      } else if (fullTerm.toLowerCase().trim() === term[i].pluralTerm) {
        abbreviateTerm = term[i].plTerm;
      }
    };
    if (!abbreviateTerm) {
      abbreviateTerm = "No abbreviation";
    }
    this.setState({
      abbTerm: abbreviateTerm
    });
  }
  render() {
    return (
      <div className="content-container">
        <div>
          <h2>Abbreviate Term</h2>
        </div>
        <input 
          autoFocus 
          className="text-input" 
          type="text" 
          placeholder="Enter Term" 
          onChange={this.handleAddTerm} 
        />
        <div>
          <button onClick={this.handleAbbreviateTerm} className="button">Abbreviate</button>
        </div>
        <div>
          <h3 id="abbreviate" align="center">{this.state.abbTerm}</h3>
        </div>
      </div>
    );
  };
};

export default AbbreviateTerm;