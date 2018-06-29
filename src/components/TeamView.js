import React from 'react';
import './styles/TeamView.css';


const TeamView  = ({ teamList }) => {
    var sprite1 = teamList[1] == null ?  null : teamList[1].sprite;
    var sprite2 = teamList[2] == null ? null : teamList[2].sprite;
    var sprite3 = teamList[3] == null ? null : teamList[3].sprite;
    var sprite4 = teamList[4] == null ? null : teamList[4].sprite;
    var sprite5 = teamList[5] == null ? null : teamList[5].sprite;
    var sprite6 = teamList[6] == null ? null : teamList[6].sprite;

    return (
        <section className="team-view">
            <div className="column1">
                <div className="pokemon-view">
                    <img src={sprite1} className='sprite-image' alt="sprite"/>
                </div>
                    <button className="remove">X</button>

                <div className="pokemon-view">
                    <img src={sprite2} className='sprite-image' alt="sprite"/>
                </div>
                    <button className="remove">X</button>

                <div className="pokemon-view">
                    <img src={sprite3} className='sprite-image' alt="sprite"/>
                </div>
                    <button className="remove">X</button>
            </div>
            <div className="column2">
                <div className="pokemon-view">
                    <img src={sprite4} className='sprite-image' alt="sprite"/>
                </div>
                    <button className="remove">X</button>

                <div className="pokemon-view">
                    <img src={sprite5} className='sprite-image' alt="sprite"/>
                </div>
                    <button className="remove">X</button>

                <div className="pokemon-view">
                    <img src={sprite6} className='sprite-image' alt="sprite"/>
                </div>
                    <button className="remove">X</button>
            </div>

        </section>

    )

}

export default TeamView;