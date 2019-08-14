import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <div className="col-6">
        <h1>Result A: {props.A}</h1>
        <button onClick={()=>props.updateA(props.B)}>Upgrade A</button>
      </div>
      <div className="col-6">
        <h1>Result B: {props.B} </h1>
        <button onClick={()=>props.updateB(props.A)}>Upgrade B</button>
      </div>
    </div>
  );
}

const mapStoreToProp = (store)=>{
    return{
        A: store.rA.A,
        B: store.rB.B
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateA: (B)=>{dispatch({type:'UPGRADE_A',val: B})},
        updateB: (A)=>{dispatch({type:'UPGRADE_B',val: A})}
    }
}


export default connect(mapStoreToProp,mapDispatchToProps)(App);
