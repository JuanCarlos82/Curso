import {Fragment, useState, useEffect} from 'react';
import * as API from './peticiones/peticion1';
function App() {
  //Hooks useState, useEffect
  const [team, setTeam] = useState();
  const [member, setMember] = useState([]);

  useEffect(()=>{
    API.getSuperHeroes()
    .then((dat) =>{
      setTeam(dat.squadName);
      setMember(dat.members);
    })
  }, []);

  return (
    <Fragment>
        <h1>{team}</h1>
        <ul>
          {
            member.map((it, idx) => 
              (<li key={idx}>{it.name}</li>)
            )
          }
        </ul>
    </Fragment>
  );
}

export default App;
