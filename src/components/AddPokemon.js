import React, { Component } from 'react';
import TeamView from './TeamView';
import './styles/AddPokemon.css';

class AddPokemon extends Component {
    constructor() {
        super();
        this.state = {
            teamList: []
        };
    }

    addPokemon(pokemon) {
        console.log(this.state.teamList.length)
        if(this.state.teamList.length < 7) {
            var newList = this.state.teamList;
            newList.push(pokemon);
            console.log(newList);
            this.setState({teamList: newList});
        } else {
            console.log("You already have 6 pokemon");
        }
    }

    render() {
        return (
            <div className="total">
                <div className="Add">
                    <button onClick={() => this.addPokemon(this.props.pokemon)} className="add-pokemon">
                        <p>Add Pokemon</p>
                    </button>
                </div>
                <div className= "Team">
                    <TeamView teamList={this.state.teamList}/>
                </div>
            </div>

        )
    }
}

export default AddPokemon;