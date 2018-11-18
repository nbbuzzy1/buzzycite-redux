import React from 'react';

const Citation = (props) => (
  <div id="displayedCitation">
    <h3><i>{props.parties}</i>{props.citation}</h3>
  </div>
)

export default Citation;