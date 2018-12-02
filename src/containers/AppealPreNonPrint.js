import React from 'react';
import term from '../term';
import moment from 'moment';
import AddParties from '../components/AddParties';
import AddWestlawLexis from '../components/AddWestlawLexis';
import AddYear from '../components/AddYear';
import AddPinpoint from '../components/AddPinpoint';
import AddDistrict from '../components/AddDistrict';
import AddCountyCase from '../components/AddCountyCase';
import AddMonthDay from '../components/AddMonthDay';
import CiteCase from '../components/CiteCase';
import Citation from '../components/Citation';
import RemoveCitation from '../components/RemoveCitation';
import CopyCitation from '../components/CopyCitation';
import SaveCitation from '../components/SaveCitation';
import SaveModal from '../components/SaveModal';

export default class AppealPreNonPrint extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "",
    district: "",
    districtDisplay: "", 
    county: "",
    caseNo: "",
    westlawNo: "",
    westlawDisplay: "",
    lexisNo: "",
    lexisDisplay: "",
    month: "",
    day: "",
    year: "",
    pinpointNumber: "",
    pinpointDisplay: "",
    parties: "",
    citation: "",
    fullCitation: "",
    createdAt: "",
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
    let specialTermsOne = partyOne
      .replace("also known as", "a.k.a.")
      .replace("Also Known As", "a.k.a.")
      .replace("attorney general", "Atty. Gen.")
      .replace("Attorney General", "Atty. Gen.")
      .replace("doing business as", "d.b.a.")
      .replace("Doing Business As", "d.b.a.")
      .replace("formerly known as", "f.k.a.")
      .replace("Formerly Known As", "f.k.a.")
      .replace("in the matter of", "In re")
      .replace("In the Matter of", "In re")
      .replace("now known as", "n.k.a.")
      .replace("Now Known As", "n.k.a.")
      .replace("prosecuting attorney", "Pros. Atty.")
      .replace("Prosecuting Attorney", "Pros. Atty.")
      .replace("savings & loan", "S. & L.")
      .replace("Savings & Loan", "S. & L.")
    let splitPartyOne = specialTermsOne.trim().split(" ");
    for (let i = 0; i < splitPartyOne.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitPartyOne[i].toLowerCase() === term[y].fullTerm) {
          splitPartyOne[i] = term[y].abbTerm;
        } else if (splitPartyOne[i].toLowerCase() === term[y].pluralTerm) {
          splitPartyOne[i] = term[y].plTerm;
        };
      };
    };
    let newPartyOne = splitPartyOne.join(" ");
  
    const partyTwo = this.state.partyTwo;
    let specialTermsTwo = partyTwo
      .replace("also known as", "a.k.a.")
      .replace("Also Known As", "a.k.a.")
      .replace("attorney general", "Atty. Gen.")
      .replace("Attorney General", "Atty. Gen.")
      .replace("doing business as", "d.b.a.")
      .replace("Doing Business As", "d.b.a.")
      .replace("formerly known as", "f.k.a.")
      .replace("Formerly Known As", "f.k.a.")
      .replace("in the matter of", "In re")
      .replace("In the Matter of", "In re")
      .replace("now known as", "n.k.a.")
      .replace("Now Known As", "n.k.a.")
      .replace("prosecuting attorney", "Pros. Atty.")
      .replace("Prosecuting Attorney", "Pros. Atty.")
      .replace("savings & loan", "S. & L.")
      .replace("Savings & Loan", "S. & L.")
    let splitPartyTwo = specialTermsTwo.trim().split(" ");
    for (let i = 0; i < splitPartyTwo.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitPartyTwo[i].toLowerCase() === term[y].fullTerm) {
          splitPartyTwo[i] = term[y].abbTerm;
        } else if (splitPartyTwo[i].toLowerCase() === term[y].pluralTerm) {
          splitPartyTwo[i] = term[y].plTerm;
        };
      };
    };
    let newPartyTwo = splitPartyTwo.join(" ");
    const now = moment().format('MMM D, YYYY').toString();

    if (this.state.partyOne && this.state.partyTwo && this.state.district && this.state.county && this.state.caseNo && (this.state.westlawNo || this.state.lexisNo) && this.state.month && this.state.year && this.state.day) {
      this.setState({
        parties: `${newPartyOne} v. ${newPartyTwo}`
      });
      this.setState({
        citation: `, ${this.state.district} Dist. ${this.state.county} No. ${this.state.caseNo}, ${this.state.year} ${this.state.westlawDisplay}${this.state.lexisDisplay}${this.state.pinpointDisplay} (${this.state.month} ${this.state.day}, ${this.state.year})`
      });
      this.setState({
        fullCitation: `${newPartyOne} v. ${newPartyTwo}, ${this.state.district} Dist. ${this.state.county} No. ${this.state.caseNo}, ${this.state.year} ${this.state.westlawDisplay}${this.state.lexisDisplay}${this.state.pinpointDisplay} (${this.state.month} ${this.state.day}, ${this.state.year})`
        //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001 WL 234234 (Jan. 1, 2001)
      });
      this.setState({
        createdAt: now
      });
    };
  };
  handleDistrict = (e) => {
    this.setState({
      district: e.target.value,
      districtDisplay: ` (${e.target.value} Dist.${this.state.year})`
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
  handleWestlaw = (e) => {
    this.setState({
      westlawNo: e.target.value, 
    });
    if (e.target.value) {
      this.setState({
        westlawDisplay: `WL ${e.target.value}`
      });
    } else {
      this.setState({
        westlawDisplay:""
      });
    };
  };
  handleLexis = (e) => {
    this.setState({
      lexisNo: e.target.value,
    });
    if (e.target.value) {
      this.setState({
        lexisDisplay: `Ohio App. Lexis ${e.target.value}`
      });
    } else {
      this.setState({
        lexisDisplay:""
      });
    };
  };
  handleMonth = (e) => {
    this.setState({
      month: e.target.value
    });
  };
  handleDay = (e) => {
    this.setState({
      day: e.target.value
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
      pinpointDisplay: `, *${e.target.value}`
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
    district.value = "";
    month.value = "";
    this.setState({
      partyOne: "",
      partyTwo: "",
      district: "",
      districtDisplay: "",
      county: "",
      westlawNo: "",
      westlawDisplay: "",
      lexisNo: "",
      lexisDisplay: "",
      caseNo: "",
      month: "",
      day: "",
      pinpointNumber: "",
      pinpointDisplay: "",
      year: "",
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
  }
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
          <h3>Before May 1, 2002</h3>
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
          <AddWestlawLexis 
            handleWestlaw={this.handleWestlaw}
            westlawNo={this.state.westlawNo}
            handleLexis={this.handleLexis}
            lexisNo={this.state.lexisNo}
          />
          <AddMonthDay 
            handleMonth={this.handleMonth}
            month={this.state.month}
            handleDay={this.handleDay}
            day={this.state.day}
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