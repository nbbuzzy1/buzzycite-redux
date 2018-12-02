import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByType } from '../actions/filters';

const CitationListFilters = (props) => (
  <div>
    <input 
      type="text" 
      className="text-input-filter"
      placeholder="Search citation"
      value={props.filters.text} 
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }} 
    />
    <select
      value={props.filters.sortBy}
      className="select-filter"
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'type') {
          props.dispatch(sortByType());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="type">Type</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(CitationListFilters);

