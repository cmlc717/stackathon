import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { fetchMoves, selectMoves } from './movesSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleMove from "./singleMove";

/**
 * COMPONENT
 */
const Moves = (props) => {
    const { data } = props;
    const moves = [];
    const dispatch = useDispatch();
    const movesData = useSelector(selectMoves);

    for (let i = 0; i < data.length; i++) {
        moves.push(data[i].move.name);
    }

    useEffect(() => {
        dispatch(fetchMoves(moves));
    }, [dispatch])

    return (
        <div data-aos='fade-up'>
            {movesData==="rejected"? 
                <p>
                    There was an error loading moves.
                    <img id = "rejected" src="/rotom-cry.gif" />
                </p>
            :<></>}
            {movesData==="pending"? 
                <p>
                    ...Loading...
                    <img id = "loading" src="/loading.gif"/>
                </p>
            :<></>}
            {typeof movesData != "string" && movesData.length>0?
            <div>
                <h2>Moveset</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Damage Class</th>
                        <th>Accuracy</th>
                        <th>Power</th>
                        <th>PP</th>
                        <th>Priority</th>
                        <th>Effect</th>
                    </tr>
                    {movesData.map((move) => <SingleMove key={uuid4()} move={move} />)}
                </table>
            </div>: <></>}
        </div>
    );
};

export default Moves;
