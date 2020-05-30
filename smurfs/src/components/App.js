import React, { useState, useEffect } from "react";
import axios from 'axios'
import Smurfs from './Smurfs'
import AddSmurf from './AddSmurf'
import "./App.css";
import  SmurfContext  from "../context/SmurfContext";
import styled from 'styled-components'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// Built App below:

export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const Card = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 90% 
        justify-content: center;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        color: #032749`

  const SmurfInfo = styled.div`
    background: #d3c8ab`


  console.log(smurfs);
  return (
    <Card>
      <SmurfInfo>
      <SmurfContext.Provider value={{ smurfs }}>
        <h1>Smurfs in Smurf-Town</h1>
        <Smurfs />
        <AddSmurf addSmurf={addSmurf} />
      </SmurfContext.Provider>
      </SmurfInfo>
    </Card>
  );
} 
