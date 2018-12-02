import React from 'react';
import { connect } from 'react-redux';
import CitationListItem from '../components/CitationListItem';
import selectCitations from '../selectors/citations';
import CitationListFilters from '../components/CitationListFilters';

const CitationList = (props) => (
  <div className="content-container__citation-list">
    <h1 className="citation-list__title">Citation List</h1>
    <div className="citation-list__filter">
      <CitationListFilters />
    </div>
    <div className="list-header">
      <div className="citation">Citation</div>
      <div className="citation__date">Date</div>
      <div className="citation__type">Type</div>
      <div className="citation__note">Note</div>
      <button className="list-header__button"><i className="fa fa-lg fa-trash" aria-hidden="true"></i></button>
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