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
      
        <h3>Loading...</h3>
      
      </div>

    );
  }
};

export default SmurfList;