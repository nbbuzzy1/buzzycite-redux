import React from 'react';
import term from '../term';
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

export default class SupremePost extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "", 
    year: "",
    pinpointNumber: "",
    pinpointDisplay: "",
    district: "",
    county: "",
    caseNo: "",
    webcite: "",
    parties: "",
    citation: ""
  };
  handlePartyOne = (e) => {
    this.setState({
      partyOne: e.target.value
    })
  }
  handlePartyTwo = (e) => {
    this.setState({
      partyTwo: e.target.value,
    })
  }
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
        }
      }
    }
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
        }
      }
    }
    let newPartyTwo = splitPartyTwo.join(" ");

    if (this.state.partyOne && this.state.partyTwo && this.state.district && this.state.county && this.state.caseNo && this.state.webcite && this.state.year) {
      this.setState({
        parties: `${newPartyOne} v. ${newPartyTwo}`
      })
      this.setState({
        citation: `, ${this.state.district} Dist. ${this.state.county} No. ${this.state.caseNo}, ${this.state.year}-Ohio-${this.state.webcite}${this.state.pinpointDisplay}`
      //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001-Ohio-2334
      })
    }
  }
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  handleWebcite = (e) => {
    this.setState({
      webcite: e.target.value
    })
  }
  handlePinpoint = (e) => {
    this.setState({
      pinpointNumber: e.target.value,
      pinpointDisplay: `, ¶ ${e.target.value}`
    })
    if (e.target.value === "") {
      this.setState({
        pinpointDisplay: ""
      })
    }
  }
  handleDistrict = (e) => {
    this.setState({
      district: e.target.value,
    })
  }
  handleCounty = (e) => {
    this.setState({
      county: e.target.value
    })
  }
  handleCaseNo = (e) => {
    this.setState({
      caseNo: e.target.value
    })
  }
  handleRemoveCitation = () => {
    district.value = "";
    this.setState({
      citation: "",
      parties: "",
      partyOne: "",
      partyTwo: "",
      district: "",
      county: "",
      caseNo: "",
      webcite: "",
      pinpointNumber: "",
      pinpointDisplay: "",
      year: "",
    })
  }
  startCopyCitation = (citationText) => {
    let copyArea = document.getElementById('fullCitation')
    copyArea.innerHTML = citationText
    copyArea.focus()
    document.execCommand("selectAll");
    document.execCommand("copy");
  }
  handleCopyCitation = () => {
    this.startCopyCitation(`<i>${this.state.parties}</i>${this.state.citation}`);
  }
  handleStartCitation = (e) => {
    e.preventDefault();
  }
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
        </div>
      </div>
    );
  }
}