import React from 'react';
import AOS from 'aos';
AOS.init();
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory';
/**
 * COMPONENT
 */
const CompareStats = (props) => {
    const { data1, data2 } = props;
    const stats1 = [];
    const stats2 = [];

    for (let i = 0; i < data1.length; i++) {
        stats1.push({x: i+1, y: data1[i].base_stat});
        stats2.push({x: i+1, y: data2[i].base_stat});
    }

    return (
        <div className='statComparison'>
            <h2>Stat Comparison</h2>
            <div className = "bar" data-aos='fade-up'>
            <VictoryChart
                width={600}
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
                    colorScale={["gold", "lightskyblue"]}
                    categories={{ x: ["hp", "attack", "defense", "special-attack", "special-defense", "speed"] }}
                >
                    <VictoryBar
                    data={stats1}
                    />
                    <VictoryBar
                    data={stats2}
                    />
                </VictoryGroup>
            </VictoryChart>
            </div>
        </div>
    );
};

export default CompareStats;
