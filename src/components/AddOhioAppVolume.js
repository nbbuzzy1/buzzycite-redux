import React from 'react';

const AddOhioAppVolume = (props) => (
  <div>
    <div>
      <input value={props.ohioVolume} className="text-input" required type="number" id="ohioAppVolume" placeholder="Ohio Volume" onChange={props.handleOhioVolume}/>
    </div>
    <div>
      <select required className="select" id="ohioAppReporter" onChange={props.handleOhioReporter}>
        <option value="">Ohio Reporter</option>
        <option value="Ohio App.3d">Ohio App.3d</option>
        <option value="Ohio App.2d">Ohio App.2d</option>
        <option value="Ohio App.">Ohio App.</option>
      </select>
    </div>
    <div>
      <input value={props.ohioFirstPage} className="text-input" required type="number" id="ohioAppFirstPage" placeholder="Ohio First Page" onChange={props.handleOhioFirstPage}/>
    </div>
  </div>
)

export default AddOhioAppVolume;