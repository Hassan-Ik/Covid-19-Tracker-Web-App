import Axios from 'axios';
import React, {useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import  {Line , Bar, Area} from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({data:{confirmed, recovered, deaths}, country}) => {
    const  [dailyData, setDailyData] = useState([]);
    

    useEffect(() => {
        const fetchAPI = async () => { 
            setDailyData(await  fetchDailyData())
        };
        
        fetchAPI();
    }, [] );

    const lineChart = (
        dailyData.length != 0? // 
        (<Line data = {{
            labels: dailyData.map(({date}) => date) ,
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: 'darkred',
                fill: true,
            }, {
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'black',
                backgroundColor: 'rgba(255,255,255,0.5)',
                fill: true,
            }],

        }}>

        </Line>) : null
    
    );
    console.log(confirmed, recovered, deaths);

        const barChart = (
            confirmed ? (
                <Bar
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label: 'People',
                        backgroundColor: ['red','green','black'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }} 
                options={{
                    legend: {display:false},
                    title: {display:true, text:`Current State in ${country}`},
                }}
                />
            ):null

        );
        const AreaChart = (
            confirmed ? (
                <Area
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label: 'People',
                        backgroundColor: ['red','green','black'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }} 
                options={{
                    legend: {display:false},
                    title: {display:true, text:`Current State in ${country}`},
                }}
                />
            ):null
        
        );
        
    return (
        <div className={styles.contain}>
            <select>
                <option value={lineChart}>Line Chart</option>
                <option value={barChart}>Bar Chart</option>
                <option value={AreaChart}>Area Chart</option>
            </select>
        <div className={styles.container} >
            {country? barChart: lineChart}
        </div>
        </div>
    )
}

export default Charts;