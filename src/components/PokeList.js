import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({ showDetail }) => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                showDetail={showDetail}
            />
        );
    });

    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default PokeList;