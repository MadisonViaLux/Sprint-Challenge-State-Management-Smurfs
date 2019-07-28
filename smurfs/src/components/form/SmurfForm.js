import React, { useState } from "react";




function SmurfForm({ smurf, addDatSmurf }){

    const [theSmurfs, setTheSmurfs] = useState(smurf)

    console.log(theSmurfs)

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