import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDatSmurf, addDatSmurf } from "./components/actions/index";

import SmurfList from "./components/form/SmurfList";
import SmurfForm from "./components/form/SmurfForm";

const SmurfApp = ({ smurfs, getDatSmurf, addDatSmurf }) => {


  console.log(smurfs)

  useEffect(() => {
    getDatSmurf();
  }, []);


    return (
      <div>

        <SmurfList smurfs={smurfs}/>

        <SmurfForm smurfs={smurfs} addDatSmurf={addDatSmurf} />

      </div>
    );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    error: state.error,
    grabbingSmurf: state.grabbingSmurf,
    addingSmurf: state.addingSmurf,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getDatSmurf, addDatSmurf }
)(SmurfApp);