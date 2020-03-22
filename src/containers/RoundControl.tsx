import React from 'react';

import { connect } from 'react-redux';
import { store } from '..';
import { nextRound } from '../actions';
import logo_full from './../assets/logo_full.png'


const RoundControl = (props: any) => {
    if (props.round == 0) {
        return (
            <div className="info-container">

                <div><h2><b>Welcome to the fight against Corona at the MVP of Unplague.de!</b></h2></div>
                <img src={logo_full} width="250px"></img>

                <div>
                    The goal of Unplague is to <b>extend the time until 70% of the world population is infected</b> with the Corona virus. This is the only way to save the health system from overloading.<br />
Therefore you have the <b>possibility to take measures to contain the coronavirus</b>. You can choose between global and local measures. Your <b>decisions are limited</b> by the <b>most valuable resource</b> in the fight against the virus: <b>toilet paper points</b>. Also, you must never forget the <b>satisfaction of the population</b> in the individual regions, otherwise there will be <b>corona partys</b> and the infection rate will increase dramatically.<br />
</div>
                <button onClick={() => { store.dispatch(nextRound()); }}>
                    Start Game
                </button>

                <div>
                Unplague was conceived and developed within less than 48 hours as part of the #wirvsvirus hackathon of the Federal Government in Germany. Do you like the idea? Then give us your like in the public voting on <a href="">YouTube</a>.
                </div>
            </div>
        );
    } else {
        return (
            <div className="stats">
                <div className="data">
                    <div className="round">
                        Current Round:
                    </div>
                    <div className="value">{props.round}</div>
                </div>
                <div className="data">
                    <div className="round">
                        Overall Infection:
                    </div>
                    <div className="value">{Math.round(props.infectionRate * 100)}%</div>
                </div>
                <div className="data">
                    <div className="round">
                        Ressources:
                    </div>
                    <div className="value">{props.money} <span className="tpp">🧻</span></div>
                </div>
                <div className="nextButton">
                    <button onClick={() => store.dispatch(nextRound())}>
                        Next Round
                </button>
                </div>
            </div>
        );
    }
};

const mapStateToProps: any = (state: any) => {
    return {
        round: state.world.round,
        money: state.world.money,
        infectionRate: state.world.overallInfectionRate,
    }
};
export default connect(mapStateToProps)(RoundControl);