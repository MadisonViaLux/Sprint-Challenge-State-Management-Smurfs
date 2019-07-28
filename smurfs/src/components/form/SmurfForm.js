import React, { useState } from "react";




const SmurfForm = ({ smurfs, addDatSmurf }) => {

    const [theSmurfs, setTheSmurfs] = useState(smurfs)

    console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', smurfs)

    const handleChange = event => {
        event.preventDefault();
        setTheSmurfs(event.target.value);
      };

      const processingSmurf = () => {
          addDatSmurf(theSmurfs)
      }



    return (
        <form onSubmit={processingSmurf} >

            <input
                type="text"
                name="name"
                value={theSmurfs}
                autoComplete="off"
                placeholder="Name"
                onChange={handleChange}
            />

            <input
                type="text"
                name="age"
                value={theSmurfs}
                autoComplete="off"
                placeholder="age"
                onChange={handleChange}
            />


            <input
                type="text"
                name="height"
                value={theSmurfs}
                autoComplete="off"
                placeholder="height"
                onChange={handleChange}
            />

            <button>here</button>

        </form>    
    );
};

export default SmurfForm;