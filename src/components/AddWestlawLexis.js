import React from 'react';

const AddWestlawLexis = (props) => (
  <div>
    <div>
      <input value={props.westlawNo} className="text-input" type="number" id="westlaw" placeholder="Westlaw Number" onChange={props.handleWestlaw} />
    </div>
    <div>
      <input value={props.lexisNo} className="text-input" type="number" id="lexis" placeholder="Lexis Number" onChange={props.handleLexis}/>
    </div>
  </div>
);

export default AddWestlawLexis;