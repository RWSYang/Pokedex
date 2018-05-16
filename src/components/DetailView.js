import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon, addPokemon }) => {
    const { id, name, sprite, type1, type2 } = pokemon;

    return (
        <section className="detail-view">
            <img src={sprite} className='sprite-image' alt="sprite"/>
            <div className='data-wrapper'>
                <h1 className='data-name'>Name: {name}</h1>
                <p1 className="data-char">ID: {id} </p1>
                <p className="data-char">Primary Type: {type1}</p>
                <p className="data-char">Secondary Type: {type2}</p>
            </div>
                <button onClick={() => addPokemon(pokemon)} className="add-pokemon">
                    <p>Add Pokemon</p>
                </button>

        </section>
    )
}

export default DetailView;