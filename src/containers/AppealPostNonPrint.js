import React from 'react';
import abbreviate from '../abbreviate';
import moment from 'moment';
import AddParties from '../components/AddParties';
import AddYear from '../components/AddYear';
import AddPinpoint from '../components/AddPinpoint';
import AddDistrict from '../components/AddDistrict';
import AddCountyCase from '../components/AddCountyCase';
import AddWebcite from '../components/AddWebcite';
import CiteCase from '../components/CiteCase';
import Citation from '../components/Citation';
import RemoveCitation from '../components/RemoveCitation';
import CopyCitation from '../components/CopyCitation';
import SaveCitation from '../components/SaveCitation';
import SaveModal from '../components/SaveModal';

export default class AppealPostNonPrint extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "", 
    district: "",
    county: "",
    caseNo: "",
    year: "",
    webcite: "",
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
      partyTwo: e.target.value
    });
  };
  handleCitation =() => {
    const partyOne = this.state.partyOne;
    const newPartyOne = abbreviate(partyOne)
  
    const partyTwo = this.state.partyTwo;
    const newPartyTwo = abbreviate(partyTwo)
    
    const now = moment().format('MMM D, YYYY').toString();

    if (this.state.partyOne && this.state.partyTwo && this.state.district && this.state.county && this.state.caseNo && this.state.webcite && this.state.year) {
      this.setState({
        parties: `${newPartyOne} v. ${newPartyTwo}`
      });
      this.setState({
        citation: `, ${this.state.district} Dist. ${this.state.county} No. ${this.state.caseNo}, ${this.state.year}-Ohio-${this.state.webcite}${this.state.pinpointDisplay}`

      });
      this.setState({
        fullCitation: `${newPartyOne} v. ${newPartyTwo}, ${this.state.district} Dist. ${this.state.county} No. ${this.state.caseNo}, ${this.state.year}-Ohio-${this.state.webcite}${this.state.pinpointDisplay}`
        //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001-Ohio-2334
      });
      this.setState({
        createdAtDisplay: now
      });
    };
  };
  handleDistrict = (e) => {
    this.setState({
      district: e.target.value
    });
  };
  handleCounty = (e) => {
    this.setState({
      county: e.target.value
    });
  };
  handleCaseNo = (e) => {
    this.setState({
      caseNo: e.target.value
    });
  };
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    });
  };
  handleWebcite = (e) => {
    this.setState({
      webcite: e.target.value
    });
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
    let copyArea = document.getElementById('fullCitation')
    copyArea.innerHTML = citationText;
    copyArea.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
  };
  handleCopyCitation = () => {
    this.startCopyCitation(`<i>${this.state.parties}</i>${this.state.citation}`);
  };
  handleRemoveCitation = () => {
    district.value = "";
    this.setState({
      partyOne: "",
      partyTwo: "",
      district: "",
      county: "",
      caseNo: "",
      year: "",
      webcite: "",
      pinpointNumber: "",
      pinpointDisplay: "",
      parties: "",
      citation: "",
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
          <h2>Ohio Court of Appeals</h2>
          <h3>May 1, 2002 and After</h3>
          <h4>Non-Print Published</h4>
        </div>
        <form onSubmit={this.handleStartCitation}>
          <AddParties 
            handlePartyOne={this.handlePartyOne} 
            partyOne={this.state.partyOne}
            handlePartyTwo={this.handlePartyTwo} 
            partyTwo={this.state.partyTwo}
          />
          <AddDistrict
            handleDistrict={this.handleDistrict}
          />
          <AddCountyCase
            handleCounty={this.handleCounty}
            county={this.state.county}
            handleCaseNo={this.handleCaseNo}
            caseNo={this.state.caseNo}
          />
          <AddYear
            handleYear={this.handleYear}
            year={this.state.year}
          />
          <AddWebcite
            handleWebcite={this.handleWebcite}
            webcite={this.state.webcite}
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