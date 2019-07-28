import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getDatSmurf } from './components/actions/index'



const SmurfApp = props => {

    // const DatSmurfy = e => {
    //     e.preventDefault();
    //     props.getDatSmurf()
    // }

    console.log(props)

    return(
        <div>

            <h2>Name: {props.name}</h2>

            <p>Age: {props.age}</p>

            <p>Height: {props.height}</p>

            <button onClick={DatSmurfy}>here</button>

            {props.error && <p> {props.error} </p>}

            {props.isLoading && (<Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />)}

        </div>
    )


}


const mapStateToProps = state => {
    return{
        error: state.error,
        isLoading: state.isLoading,
        name: state.name,
        age: state.age,
        height: state.height
    }
}


export default connect(
    mapStateToProps,
    { getDatSmurf }
)(SmurfApp)