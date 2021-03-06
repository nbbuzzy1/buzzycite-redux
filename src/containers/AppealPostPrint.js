import React from 'react';
import abbreviate from '../abbreviate';
import moment from 'moment';
import AddParties from '../components/AddParties';
import AddOhioAppVolume from '../components/AddOhioAppVolume';
import AddRegionalAppVolume from '../components/AddRegionalAppVolume';
import AddYear from '../components/AddYear';
import AddPinpoint from '../components/AddPinpoint';
import AddDistrict from '../components/AddDistrict';
import AddWebcite from '../components/AddWebcite';
import CiteCase from '../components/CiteCase';
import Citation from '../components/Citation';
import RemoveCitation from '../components/RemoveCitation';
import CopyCitation from '../components/CopyCitation';
import SaveCitation from '../components/SaveCitation';
import SaveModal from '../components/SaveModal';

export default class AppealPostPrint extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "", 
    ohioVolume: "",
    ohioReporter: "",
    ohioFirstPage: "",
    regionalVolume: "",
    regionalReporter: "",
    regionalFirstPage: "",
    regionalDisplay: "",
    webcite: "",
    year: "",
    district: "",
    districtDisplay: "",
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

    if (this.state.partyOne && this.state.partyTwo && this.state.ohioVolume && this.state.ohioVolume && this.state.ohioFirstPage && this.state.webcite && this.state.year && this.state.district) {
      this.setState({
        parties: `${newPartyOne} v. ${newPartyTwo}`
      });
      this.setState({
        citation: `, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.year}-Ohio-${this.state.webcite}${this.state.regionalDisplay}${this.state.districtDisplay}${this.state.pinpointDisplay}`
      });
      this.setState({
        fullCitation: `${newPartyOne} v. ${newPartyTwo}, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.year}-Ohio-${this.state.webcite}${this.state.regionalDisplay}${this.state.districtDisplay}${this.state.pinpointDisplay}`
        //i.e. Smith v. Smith, 234 Ohio App.3d, 2012-Ohio-1234, 423 N.E.3d (8th Dist.)
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
      regionalFirstPage: e.target.value,
      regionalDisplay: `, ${this.state.regionalVolume} ${this.state.regionalReporter} ${e.target.value}`
    });
    if (!e.target.value) {
      this.setState({
        regionalDisplay: ""
      });
    };
  };
  handleWebcite = (e) => {
    this.setState({
      webcite: e.target.value
    });
  };
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    });
  };
  handleDistrict = (e) => {
    this.setState({
      district: e.target.value,
      districtDisplay: ` (${e.target.value} Dist.)`
    });
    if (!e.target.value) {
      this.setState({
        districtDisplay: ""
      });
    };
  };
  handlePinpoint = (e) => {
    this.setState({
      pinpointNumber: e.target.value,
      pinpointDisplay: `, ¶ ${e.target.value}`
    });
    if (!e.target.value) {
      this.setState({
        pinpointDisplay: ""
      });
    };
  };
  handleStartCitation = (e) => {
    e.preventDefault();
  };
  startCopyCitation = (citationText) => {
    let copyArea = document.getElementById('fullCitation');
    copyArea.innerHTML = citationText;
    copyArea.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
  };
  handleCopyCitation = () => {
    this.startCopyCitation(`<i>${this.state.parties}</i>${this.state.citation}`);
  };
  handleRemoveCitation = () => {
    ohioAppReporter.value = "";
    regionalReporter.value = "";
    district.value = "";
    this.setState({
      partyOne: "",
      partyTwo: "",
      ohioVolume: "",
      ohioAppReporter: "",
      ohioFirstPage: "",
      regionalVolume: "",
      regionalReporter: "",
      regionalFirstPage: "",
      regionalDisplay: "",
      webcite: "",
      year: "",
      district: "",
      districtDisplay: "",
      pinpointNumber: "",
      pinpointDisplay: "",
      fullCitation: "",
      parties: "",
      citation: "",
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
          <h2>Ohio Court of Appeals</h2>
          <h3>May 1, 2002 and After</h3>
          <h4>Print Published</h4>
        </div>
        <form onSubmit={this.handleStartCitation}>
          <AddParties 
            handlePartyOne={this.handlePartyOne} 
            partyOne={this.state.partyOne}
            handlePartyTwo={this.handlePartyTwo} 
            partyTwo={this.state.partyTwo}
          />
          <AddOhioAppVolume
            handleOhioVolume={this.handleOhioVolume} 
            ohioVolume={this.state.ohioVolume}
            handleOhioReporter={this.handleOhioReporter} 
            ohioReporter={this.state.ohioReporter}
            handleOhioFirstPage={this.handleOhioFirstPage}
            ohioFirstPage={this.state.ohioFirstPage}
          />
          <AddRegionalAppVolume
            handleRegionalVolume={this.handleRegionalVolume} 
            regionalVolume={this.state.regionalVolume}
            handleRegionalReporter={this.handleRegionalReporter} 
            regionalReporter={this.state.regionalReporter}
            handleRegionalFirstPage={this.handleRegionalFirstPage}
            regionalFirstPage={this.state.regionalFirstPage}
          />
          <AddWebcite
            handleWebcite={this.handleWebcite}
            webcite={this.state.webcite}
          />
          <AddYear
            handleYear={this.handleYear}
            year={this.state.year}
          />
          <AddDistrict
            handleDistrict={this.handleDistrict}
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