import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getDatSmurf, addDatSmurf } from "./components/actions/index";

import SmurfList from "./components/form/SmurfList";
import SmurfForm from "./components/form/SmurfForm";

const SmurfApp = ({ smurfs, getDatSmurf, addDatSmurf }) => {

  useEffect(() => {
    getDatSmurf();
  }, []);

  if (smurfs && addDatSmurf) {
    return (
      <div>

        <SmurfList smurfs={smurfs}/>

        <SmurfForm smurfs={smurfs} addDatSmurf={addDatSmurf} />

      </div>
    );
  } else {

    return <div>Loading...</div>;

  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    grabbingSmurf: state.grabbingSmurf,
    isLoading: state.isLoading,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getDatSmurf, addDatSmurf }
)(SmurfApp);