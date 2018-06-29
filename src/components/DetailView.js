import React from 'react';
import AddPokemon from './AddPokemon';
import './styles/DetailView.css';

const DetailView = ({ pokemon, addPokemon, teamList }) => {
    const { id, name, sprite, type1, type2 } = pokemon;

    return (
        <section className="detail-view">
            <div className="detail">
                <img src={sprite} className='sprite-image' alt="sprite"/>
                <div className='data-wrapper'>
                    <h1 className='data-name'>Name: {name}</h1>
                    <p1 className="data-char">ID: {id} </p1>
                    <p className="data-char">Primary Type: {type1}</p>
                    <p className="data-char">Secondary Type: {type2}</p>
                </div>
            </div>
            <div className="add-pokemon">
                <AddPokemon pokemon={pokemon}/>
            </div>
        </section>
    )
}

export default DetailView;