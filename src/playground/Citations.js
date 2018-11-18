import React from 'react';
import term from '../term';

export default class Citations extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "",
    ohioVolume: "",
    ohioReporter: "",
    ohioFirstPage: "",
    regionalVolume: "",
    regionalReporter: "",
    regionalFirstPage: "",
    year: "",
    citation: ""
  };
  handleCitation =() => {
    const partyOne = this.state.partyOne;
    let splitNames = partyOne.trim().split(" ");
    console.log(splitNames)
    for (let i = 0; i < splitNames.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitNames[i].toLowerCase() === term[y].fullTerm) {
          splitNames[i] = term[y].abbTerm;
        } else if (splitNames[i].toLowerCase() === term[y].fullTerm + "s") {
          splitNames[i] = term[y].plTerm;
        }
      }
    }
    let newPartyOne = splitNames.join(" ").italics();
    this.setState({
      // i.e. State v. Smith, 123 Ohio St.3d 32, 765 N.E.2d (1999)
      citation: `${newPartyOne} v. ${this.state.partyTwo}, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.regionalFirstPage} ${this.state.regionalReporter} ${this.state.regionalFirstPage} (${this.state.year})`
    })
  }
  handlePartyOne = (e) => {
    this.setState({
      partyOne: e.target.value
    })
  }
  handlePartyTwo = (e) => {
    this.setState({
      partyTwo: e.target.value
    })
  }
  handleOhioVolume = (e) => {
    this.setState({
      ohioVolume: e.target.value
    })
  }
  handleOhioReporter = (e) => {
    this.setState({
      ohioReporter: e.target.value
    })
  }
  handleRegionalReporter = (e) => {
    this.setState({
      regionalReporter: e.target.value
    })
  }
  handleRegionalVolume = (e) => {
    this.setState({
      regionalVolume: e.target.value
    })
  }
  handleOhioFirstPage = (e) => {
    this.setState({
      ohioFirstPage: e.target.value
    })
  }
  handleRegionalFirstPage = (e) => {
    this.setState({
      regionalFirstPage: e.target.value
    })
  }
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h2>Ohio Supreme Court Pre May 1, 2002</h2>
        <div>
          <input type="text" placeholder="Party One" onChange={this.handlePartyOne} />
        </div>
        <div>
          <input type="text" placeholder="Party Two" onChange={this.handlePartyTwo} />
        </div>
        <div>
          <input type="number" placeholder="Ohio Volume" onChange={this.handleOhioVolume}/>
        </div>
        <div>
          <select onChange={this.handleOhioReporter}>
            <option value="">Ohio Reporter</option>
            <option value="Ohio St.3d">Ohio St.3d</option>
            <option value="Ohio St.2d">Ohio St.2d</option>
            <option value="Ohio St.">Ohio St.</option>
          </select>
        </div>
        <div>
          <input type="number" placeholder="Ohio First Page" onChange={this.handleOhioFirstPage}/>
        </div>
        <div>
          <input type="number" placeholder="Regional Volume" onChange={this.handleRegionalVolume} />
        </div>
        <div>
          <select onChange={this.handleRegionalReporter}>
            <option value="">Regional Reporter</option>
            <option value="N.E.3d">N.E.3d</option>
            <option value="N.E.2d">N.E.2d</option>
          <option value="N.E.">N.E.</option>
          </select>
        </div>
        <div>
          <input type="number" placeholder="Regional First Page" onChange={this.handleRegionalFirstPage}/>
        </div>
        <div>
          <input type="number" placeholder="Year" onChange={this.handleYear}/>
        </div>
        <div>
          <button onClick={this.handleCitation}>Cite</button>
        </div>
        <h3>{this.state.citation}</h3>
      </div>
    );
  }
}