import React from 'react';
import { useSelector, } from 'react-redux';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { selectTeam } from './teamSlice';
import TeamMember from './teamMember';

/**
 * COMPONENT
 */
const TeamDisplay = () => {
    let team = useSelector(selectTeam);

    return (
        <div>
            {team==="rejected"? 
                <p>
                    One or more of these pokemon do not exist.
                    <img id = "rejected" src="/rotom-cry.gif" />
                </p>
            :<></>}
            {team==="pending"? 
                <p>
                    ...Loading...
                    <img id = "loading" src="/loading.gif"/>
                </p>
            :<></>}
            {typeof team != "string" && team.length > 0?
            <div data-aos='zoom-in'>
                {team.map((teamMember) => <TeamMember key={uuid4()} teamMember={teamMember} /> )}
            </div>:<p>Build your team</p>}
        </div>
    );
};

export default TeamDisplay;
