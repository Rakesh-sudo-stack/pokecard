import React, {useState} from 'react';
import './App.css';
import pokeimg from './pokeimg.jpg';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card';

function App() {
  const [pokemon,setPokemon] = useState("");
  const [pokedata,setPokedata] = useState({
    name:'',
    image:'',
    moves:[],
    type:'',
    stats:[]
  });
  
  const searchPokemon = () => {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      console.log(res);
      setPokedata((prevalue)=>{
        return {
        name:res.data.name,
        image:res.data.sprites.other.home.front_default,
        moves:res.data.moves,
        type:res.data.types[0].type.name,
        stats:res.data.stats
        }
      });
    }
    getData();
  }

  return (
    <div className='body'>
    
    <img className="logo" src={pokeimg} alt="pokeimg"/>
    <Card name={pokedata.name} image={pokedata.image} type={pokedata.type}/>
    <table className="movestable table table-striped table-hover">
      <tr>
        <thead>MOVES<small>{pokedata.moves.length}</small></thead>
      </tr>
      {pokedata.moves.map((element)=>{
        return (<tr><td>{element.move.name}</td></tr>)
      })}
    </table>
    
    <table className='statstable table table-striped table-hover'>
      <tr>
        <td>Stats</td>
        <td></td>
      </tr>
      {pokedata.stats.map(element=>{
        return (
          <tr><td>{element.stat.name}</td><td>{element.base_stat}</td></tr>
        )
      })}
    </table>
    <div className="inputfield input-group mb-3">
      <input type="text" className="form-control" placeholder="Search for pokemon...." aria-describedby="button-addon2" onChange={(e)=>{setPokemon(e.target.value);}}></input>
      <button className="searchbtn btn btn-primary" type="button" id="button-addon2" onClick={searchPokemon}>Search</button>
    </div>
    </div>
  );
}

export default App;
