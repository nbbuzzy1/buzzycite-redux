import React from 'react';

const AddMonthDay = (props) => (
  <div>
    <select required id="month" className="select" onChange={props.handleMonth}>
      <option value="">Month</option>
      <option value="Jan.">January</option>
      <option value="Feb.">Febuary</option>
      <option value="Mar.">March</option>
      <option value="Apr.">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="Aug.">August</option>
      <option value="Sept.">September</option>
      <option value="Oct.">October</option>
      <option value="Nov.">November</option>
      <option value="Dec.">December</option>
    </select>
    <div>
      <input value={props.day} className="text-input" type="number" id="day" placeholder="Day" onChange={props.handleDay}/>
    </div>
  </div>
);

export default AddMonthDay;