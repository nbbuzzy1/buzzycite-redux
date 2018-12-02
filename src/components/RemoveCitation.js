import React from 'react';

const RemoveCitation = (props) => (
  <div>
    {props.citation && <button className="button button--remove" onClick={props.handleRemoveCitation}>Remove citation</button>}
  </div>
);

export default RemoveCitation;