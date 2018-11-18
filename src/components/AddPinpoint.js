import React from 'react';

const AddPinpoint = (props) => (
  <div>
    <input value={props.pinpointNumber} type="text" className="text-input" placeholder="Pinpoint" onChange={props.handlePinpoint} />
  </div>
)

export default AddPinpoint;