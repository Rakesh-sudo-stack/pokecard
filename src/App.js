import React, {useState} from 'react';
import './App.css';
import pokeimg from './pokeimg.jpg';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card';
import donkey from './donkey.jpg';
import giratina from './giratina.png';

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
    if(pokemon.toLowerCase()=="ansu" || pokemon.toLowerCase()=="chandramani" || pokemon.toLowerCase()=="harshit"){
      setPokedata((prevalue)=>{
        return {
        name:pokemon,
        image:donkey,
        moves:[
          {
            move:{
              name:"Back Kick"
            }
          },
          {
            move:{
              name:"Front Kick"
            }
          },
          {
            move:{
              name:"Head Butt"
            }
          }
        ],
        type:'Animal',
        stats:[
          {
            base_stat:0,
            stat:{
              name:"hp",
            }
          },
          {
            base_stat:0,
            stat:{
              name:"attack",
            }
          },
          {
            base_stat:0,
            stat:{
              name:"defense",
            }
          },
          {
            base_stat:0,
            stat:{
              name:"special-attack",
            }
          },
          {
            base_stat:0,
            stat:{
              name:"special-defense",
            }
          },
          {
            base_stat:0,
            stat:{
              name:"speed",
            }
          }
        ]
        }
      });
    }else if(pokemon.toLowerCase == "giratina"){
      setPokedata((prevalue)=>{
        return {
        name:pokemon,
        image:giratina,
        moves:[
          {
            move:{
              name:"Scary Face"
            }
          },
          {
            move:{
              name:"Dragon Breath"
            }
          },
          {
            move:{
              name:"Ominous Wind"
            }
          },
          {
            move:{
              name:"Ancient Power"
            }
          },
          {
            move:{
              name:"Slash"
            }
          },
          {
            move:{
              name:"Shadow Sneak"
            }
          },
          {
            move:{
              name:"Destiny Bond"
            }
          },
          {
            move:{
              name:"Dragon Claw"
            }
          },
          {
            move:{
              name:"Earth Power"
            }
          },
          {
            move:{
              name:"Aura Sphere"
            }
          },
          {
            move:{
              name:"Shadow Claw"
            }
          },
          {
            move:{
              name:"Shadow Force"
            }
          },
          {
            move:{
              name:"Hex"
            }
          }
        ],
        type:'dragon',
        stats:[
          {
            base_stat:150,
            stat:{
              name:"hp",
            }
          },
          {
            base_stat:100,
            stat:{
              name:"attack",
            }
          },
          {
            base_stat:120,
            stat:{
              name:"defense",
            }
          },
          {
            base_stat:100,
            stat:{
              name:"special-attack",
            }
          },
          {
            base_stat:120,
            stat:{
              name:"special-defense",
            }
          },
          {
            base_stat:90,
            stat:{
              name:"speed",
            }
          }
        ]
        }
      });
    }else{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
      console.log(res);
      if(res.status==200){
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
    else{
      console.log(`Can't find this pokemon`)
    }
    }
    getData();
  }
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
