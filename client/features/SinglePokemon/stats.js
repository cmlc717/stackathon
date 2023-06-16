import React from 'react';
import uuid4 from "uuid4";
import AOS from 'aos';
AOS.init();
import { VictoryPie } from 'victory';
/**
 * COMPONENT
 */
const Stats = (props) => {
    const { data } = props;
    const stats = [];

    for (let i = 0; i < data.length; i++) {
        stats.push({x: data[i].stat.name, y: data[i].base_stat});
    }

    return (
        <div className = "pie"  data-aos='fade-up'>
            <h2>Stat Distribution</h2>
            <VictoryPie 
                radius={({ datum }) => 255 * ( datum.y/255)} 
                labels={({datum})=> `${datum.x}: ${datum.y}`}
                width={700} data={stats} 
                colorScale={["pink", "cornflowerblue", "darkseagreen", "mediumpurple", "indianred", "lightsalmon"]}
                style={{ labels: { fill: "white", fontSize: 10} }}
            />
        </div>
    );
};

export default Stats;
