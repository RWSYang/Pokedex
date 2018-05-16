import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import TeamView from './TeamView';
import './styles/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: {},
            teamList: []
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.addPokemon = this.addPokemon.bind(this);
    }

    handleOnClick(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);
                this.setState({ pokemon: pokemon });
            })
            .catch(err => console.log(err));
    }

    addPokemon() {
        if(this.state.teamList.length < 6) {
            var newList = this.state.teamList;
            newList.concat(this.state.pokemon);
            this.setState({teamList: newList});
        } else {
            console.log("You already have 6 pokemon");
        }
    }

    render() {
        return (
            <div className="App">
                <PokeList handleOnClick={this.handleOnClick} />
                <DetailView pokemon={this.state.pokemon} addPokemon={this.addPokemon} />
                <TeamView />
            </div>
        );
    }
}

export default App;