import React from 'react';
import { connect } from 'react-redux';
import CitationListItem from '../components/CitationListItem';
import selectCitations from '../selectors/citations';
import CitationListFilters from '../components/CitationListFilters';

const CitationList = (props) => (
  <div className="content-container__citation-list">
    <h1>Case List</h1>
    <CitationListFilters />
    <div className="list-header">
      <div className="list-header__citation">Citation</div>
      <div className="list-header__date">Date</div>
      <div className="list-header__type">Type</div>
      <div className="list-header__note">Note</div>
    </div>
    <div>
      {props.citations.map((citation) => {
        return <CitationListItem key={citation.id} {...citation} />
      })}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    citations: selectCitations(state.citations, state.filters),
  };
};

export default connect(mapStateToProps)(CitationList);