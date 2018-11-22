import React from 'react';
import { connect } from 'react-redux';
import CitationListItem from '../components/CitationListItem';
import selectCitations from '../selectors/citations';
import CitationListFilters from '../components/CitationListFilters';

const CitationList = (props) => (
  <div className="content-container">
    <h1>Case List</h1>
    <CitationListFilters />
    {props.citations.map((citation) => {
      return <CitationListItem key={citation.id} {...citation} />
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    citations: selectCitations(state.citations, state.filters),
  };
};

export default connect(mapStateToProps)(CitationList);