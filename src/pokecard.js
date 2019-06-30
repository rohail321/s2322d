import React, {Component } from 'react';
import './pokecard.css';
// const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padTothree=(number)=>(number <= 999?`00${number}`.slice(-3):number);
class Pokecard extends Component{
    render(){
        let imgSrc=`${POKE_API}${padTothree(this.props.id)}.png`;
        return(
            <div className="pokecard-card">
            <h3 className="pokecard-title">{this.props.name}</h3>
            <div className="pokecard-img">
            <img src={imgSrc} alt={this.props.name}/>
            </div>
            <div className="pokecard-data">Type:{this.props.type}</div>
            <div className="pokecard-data">EXP:{this.props.exp}</div>
            </div>
        
        );
    }
}


export default Pokecard;