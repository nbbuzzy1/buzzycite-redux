import React from 'react';

const AddWestlawLexis = (props) => (
  <div>
    <select required id="month" className="select" onChange={props.handleMonth}>
      <option value="">Month</option>
      <option value="Jan">Jan.</option>
      <option value="Feb">Feb.</option>
      <option value="March">Mar.</option>
      <option value="April">Apr.</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="August">Aug.</option>
      <option value="September">Sept.</option>
      <option value="October">Oct.</option>
      <option value="November">Nov.</option>
      <option value="December">Dec.</option>
    </select>
    <div>
      <input value={props.day} className="text-input" type="number" id="day" placeholder="Day" onChange={props.handleDay}/>
    </div>
  </div>
);

export default AddWestlawLexis;