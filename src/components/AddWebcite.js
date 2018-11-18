import React from 'react';

const AddWebcite = (props) => (
  <div>
    <div>
      <input value={props.webcite} required className="text-input" type="number" id="webcite" placeholder="Webcite" onChange={props.handleWebcite}/>
    </div>
  </div>
)

export default AddWebcite;