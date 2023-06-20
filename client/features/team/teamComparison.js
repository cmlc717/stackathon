import React from 'react';
import AOS from 'aos';
AOS.init();
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory';
import { useSelector, } from 'react-redux';
import { selectTeam } from './teamSlice';

/**
 * COMPONENT
 */
const TeamCompare = (props) => {
    let team = useSelector(selectTeam);
    const stats1 = [];
    const stats2 = [];
    const stats3 = [];
    const stats4 = [];
    const stats5 = [];
    const stats6 = [];
    console.log(team)

    if (typeof team != "string" && team.length > 0) {
        for (let i = 0; i < 6; i++) {
            stats1.push({x: i+1, y: team[0].stats[i].base_stat});
            stats2.push({x: i+1, y: team[1].stats[i].base_stat});
            stats3.push({x: i+1, y: team[2].stats[i].base_stat});
            stats4.push({x: i+1, y: team[3].stats[i].base_stat});
            stats5.push({x: i+1, y: team[4].stats[i].base_stat});
            stats6.push({x: i+1, y: team[5].stats[i].base_stat});
        }
    }

    return (
        <div className='statComparison'>
            {typeof team != "string" && team.length > 0?
            <div>
                <h2>Stat Comparison</h2>
                <div className = "bar" data-aos='fade-up'>
                    <VictoryChart
                        width={1500}
                        domainPadding={100}
                    >
                        <VictoryAxis
                            style={{
                            axis: {
                                stroke: 'white' 
                            },
                            tickLabels: {
                                fill: 'white'
                            }, 
                            }}
                        />
                        <VictoryAxis dependentAxis
                            style={{
                            axis: {
                                stroke: 'white'
                            },
                            tickLabels: {
                                fill: 'white' 
                            }, 
                            }}
                        />
                        <VictoryGroup offset={20}
                            colorScale={["pink", "cornflowerblue", "darkseagreen", "mediumpurple", "indianred", "lightsalmon"]}
                            categories={{ x: ["hp", "attack", "defense", "special-attack", "special-defense", "speed"] }}
                            padding={{ right: 0, left: 0 }}
                        >
                            <VictoryBar
                            data={stats1}
                            />
                            <VictoryBar
                            data={stats2}
                            />
                            <VictoryBar
                            data={stats3}
                            />
                            <VictoryBar
                            data={stats4}
                            />
                            <VictoryBar
                            data={stats5}
                            />
                            <VictoryBar
                            data={stats6}
                            />
                        </VictoryGroup>
                    </VictoryChart>
                </div>
            </div>
            :<></>}
        </div>
    );
};

export default TeamCompare;
