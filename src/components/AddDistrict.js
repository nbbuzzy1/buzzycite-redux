import React from 'react';

const AddDistrict = (props) => (
  <div>
    <select required id="district" className="select" onChange={props.handleDistrict}>
      <option value="">District</option>
      <option value="1st">1st</option>
      <option value="2d">2d</option>
      <option value="3d">3d</option>
      <option value="4th">4th</option>
      <option value="5th">5th</option>
      <option value="6th">6th</option>
      <option value="7th">7th</option>
      <option value="8th">8th</option>
      <option value="9th">9th</option>
      <option value="10th">10th</option>
      <option value="11th">11th</option>
      <option value="12th">12th</option>
    </select>
  </div>
)

export default AddDistrict;