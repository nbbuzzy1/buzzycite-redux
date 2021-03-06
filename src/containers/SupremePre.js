import React from 'react';
// import term from '../term';
import abbreviate from '../abbreviate';
import moment from 'moment';
import AddParties from '../components/AddParties';
import AddOhioVolume from '../components/AddOhioVolume';
import AddRegionalVolume from '../components/AddRegionalVolume';
import AddYear from '../components/AddYear';
import AddPinpoint from '../components/AddPinpoint';
import CiteCase from '../components/CiteCase';
import Citation from '../components/Citation';
import RemoveCitation from '../components/RemoveCitation';
import CopyCitation from '../components/CopyCitation';
import SaveCitation from '../components/SaveCitation';
import SaveModal from '../components/SaveModal';

export default class SupremePre extends React.Component {
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
    pinpointNumber: "",
    pinpointDisplay: "",
    parties: "",
    citation: "",
    fullCitation: "",
    createdAt: moment().format(),
    createdAtDisplay: '',
    saveCitation: false,
    type: "None",
    note: "None"
  };
  handlePartyOne = (e) => {
    this.setState({
      partyOne: e.target.value
    });
  };
  handlePartyTwo = (e) => {
    this.setState({
      partyTwo: e.target.value,
    });
  };
  handleCitation =() => {
    const partyOne = this.state.partyOne;
    const newPartyOne = abbreviate(partyOne)
  
    const partyTwo = this.state.partyTwo;
    const newPartyTwo = abbreviate(partyTwo)

    const now = moment().format('MMM D, YYYY').toString();

    if (this.state.partyOne && this.state.partyTwo && this.state.ohioVolume && this.state.ohioVolume && this.state.ohioFirstPage && this.state.regionalVolume && this.state.regionalReporter && this.state.regionalFirstPage && this.state.year) {
      this.setState({
        parties: `${newPartyOne} v. ${newPartyTwo}`
      });
      this.setState({
        citation: `, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage},${this.state.pinpointDisplay} ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage} (${this.state.year})`
      });
      this.setState({
        fullCitation: `${newPartyOne} v. ${newPartyTwo}, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage},${this.state.pinpointDisplay} ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage} (${this.state.year})`
        //i.e. Smith v. Smith, 234 Ohio St.3d 284, 285, 45 N.E.3d 77 (1999)
      });
      this.setState({
        createdAtDisplay: now
      });
    };
  };
  handleOhioVolume = (e) => {
    this.setState({
      ohioVolume: e.target.value
    });
  };
  handleOhioReporter = (e) => {
    this.setState({
      ohioReporter: e.target.value
    });
  };
  handleOhioFirstPage = (e) => {
    this.setState({
      ohioFirstPage: e.target.value
    });
  };
  handleRegionalVolume = (e) => {
    this.setState({
      regionalVolume: e.target.value
    });
  };
  handleRegionalReporter = (e) => {
    this.setState({
      regionalReporter: e.target.value
    });
  };
  handleRegionalFirstPage = (e) => {
    this.setState({
      regionalFirstPage: e.target.value
    });
  };
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    });
  };
  handlePinpoint = (e) => {
    this.setState({
      pinpointNumber: e.target.value,
      pinpointDisplay: ` ${e.target.value},`
    });
    if (e.target.value === "") {
      this.setState({
        pinpointDisplay: ""
      });
    };
  };
  handleStartCitation = (e) => {
    e.preventDefault();
  };
  startCopyCitation = (citationText) => {
    let copyArea = document.getElementById('fullCitation')
    copyArea.innerHTML = citationText
    copyArea.focus()
    document.execCommand("selectAll");
    document.execCommand("copy");
  };
  handleCopyCitation = () => {
    this.startCopyCitation(`<i>${this.state.parties}</i>${this.state.citation}`);
  };
  handleRemoveCitation = () => {
    ohioReporter.value = "";
    regionalReporter.value = "";
    this.setState({
      citation: "",
      parties: "",
      partyOne: "",
      partyTwo: "",
      ohioVolume: "",
      ohioReporter: "",
      ohioFirstPage: "",
      regionalVolume: "",
      regionalReporter: "",
      regionalFirstPage: "",
      year: "",
      pinpointNumber: "",
      pinpointDisplay: "",
      fullCitation: ""
    });
  };
  handleSaveCitation = () => {
    this.setState({
      saveCitation: true
    });
  };
  handleClearSaveCitation = () => {
    this.setState({
      saveCitation: false
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
  render() {
    return (
      <div className="content-container">
        <div>
          <h2>Ohio Supreme Court</h2>
          <h3>Before May 1, 2002</h3>
        </div>
        <form onSubmit={this.handleStartCitation}>
          <AddParties 
            handlePartyOne={this.handlePartyOne} 
            partyOne={this.state.partyOne}
            handlePartyTwo={this.handlePartyTwo} 
            partyTwo={this.state.partyTwo}
          />
          <AddOhioVolume
            handleOhioVolume={this.handleOhioVolume} 
            ohioVolume={this.state.ohioVolume}
            handleOhioReporter={this.handleOhioReporter} 
            ohioReporter={this.state.ohioReporter}
            handleOhioFirstPage={this.handleOhioFirstPage}
            ohioFirstPage={this.state.ohioFirstPage}
          />
          <AddRegionalVolume
            handleRegionalVolume={this.handleRegionalVolume} 
            regionalVolume={this.state.regionalVolume}
            handleRegionalReporter={this.handleRegionalReporter} 
            regionalReporter={this.state.regionalReporter}
            handleRegionalFirstPage={this.handleRegionalFirstPage}
            regionalFirstPage={this.state.regionalFirstPage}
          />
          <AddYear
            handleYear={this.handleYear}
            year={this.state.year}
          />
          <AddPinpoint 
            handlePinpoint={this.handlePinpoint}
            pinpointNumber={this.state.pinpointNumber}
          />
          <CiteCase
            handleCitation={this.handleCitation}
          />
        </form>
        <Citation
          parties={this.state.parties}
          citation={this.state.citation}
        />
        <div className="button__layout">
          <CopyCitation
            handleCopyCitation={this.handleCopyCitation}
            citation={this.state.citation}
          />
          <RemoveCitation
            handleRemoveCitation={this.handleRemoveCitation}
            citation={this.state.citation}
          />
          <SaveCitation
            handleSaveCitation={this.handleSaveCitation}
            fullCitation={this.state.fullCitation}
            saveCitation={this.state.saveCitation}
          />
        </div>
        <SaveModal
          fullCitation={this.state.fullCitation}
          saveCitation={this.state.saveCitation}
          handleClearSaveCitation={this.handleClearSaveCitation}
          createdAt={this.state.createdAt}
          createdAtDisplay={this.state.createdAtDisplay}
          handleAddType={this.handleAddType}
          type={this.state.type}
          handleAddNote={this.handleAddNote} 
          note={this.state.note}
          dispatch={this.props.dispatch}
          history={this.props.history}
        />
      </div>
    );
  };
};