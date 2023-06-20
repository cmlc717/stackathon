import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeam } from './teamSlice';
import TeamDisplay from './teamDisplay';
import TeamCompare from './teamComparison';

/**
 * COMPONENT
 */
const Team = () => {
  const dispatch = useDispatch();
  let teamNames = ["", "", "", "", "", ""]

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTeam(teamNames));
  }


  const handleChange = (e) => {
    teamNames[Number(e.target.name)] = e.target.value.toLowerCase();
  }

  return (
    <div className="tracking-in-expand">
      <h2> Select Six Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input name="0" defaultValue={teamNames[0]} onChange={handleChange}/>
        <input name="1" defaultValue={teamNames[1]} onChange={handleChange}/>
        <input name="2" defaultValue={teamNames[2]} onChange={handleChange}/>
        <input name="3" defaultValue={teamNames[3]} onChange={handleChange}/>
        <input name="4" defaultValue={teamNames[4]} onChange={handleChange}/>
        <input name="5" defaultValue={teamNames[5]} onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
      <TeamDisplay />
      <TeamCompare />
    </div>
  );
};

export default Team;
