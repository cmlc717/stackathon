import React from 'react';
import AOS from 'aos';
AOS.init();
import { VictoryChart, VictoryGroup, VictoryBar } from 'victory';
/**
 * COMPONENT
 */
const CompareStats = (props) => {
    const { data1, data2 } = props;
    const stats1 = [];
    const stats2 = [];

    for (let i = 0; i < data1.length; i++) {
        stats1.push({x: data1[i].stat.name, y: data1[i].base_stat});
        stats2.push({x: data2[i].stat.name, y: data2[i].base_stat});
    }

    return (
        <div>
            <h2>Stat Comparison</h2>
            <div className = "bar" data-aos='fade-up'>
            <VictoryChart>
                <VictoryGroup offset={20}
                    colorScale={"qualitative"}
                >
                    <VictoryBar
                    data={data1}
                    />
                    <VictoryBar
                    data={data2}
                    />
                </VictoryGroup>
            </VictoryChart>
            </div>
        </div>
    );
};

export default CompareStats;
