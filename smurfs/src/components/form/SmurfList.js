import React from "react";

import SmurfData from "../SmurfData";

const SmurfList = ({ smurfs }) => {
//   console.log(smurfs);

  if (smurfs) {
    return (
      <div>

        {smurfs.map(smurf => (
          <SmurfData smurf={smurf} />
        ))}

      </div>
    );

  } else {
    return (
      
      <div>
      
        <h1>Loading...</h1>
      
      </div>

    );
  }
};

export default SmurfList;