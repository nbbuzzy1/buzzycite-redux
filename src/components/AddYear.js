import React from 'react';

const AddYear = (props) => (
  <div>
    <div>
      <input value={props.year} required className="text-input" type="number" id="year" placeholder="Year" onChange={props.handleYear}/>
    </div>
  </div>
)

export default AddYear;