import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import MediaCard from './MediaCard'
import Example from './Country'
import { Bar } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

 function Api(){
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    const[data, setData]= useState({})
    useEffect(() => {
        Axios.get('https://covid19.mathdro.id/api').then(res =>{
           console.log(res.data)
           setConfirmed(res.data.confirmed.value);
           setRecovered(res.data.recovered.value);
           setDeath(res.data.deaths.value);
           setData({
            confirmed,
            recovered,
            deaths
           })
        });
     });
    return (
        <>
        <Grid container>
        <Grid item xs={12} md={4} lg={4}>
            <MediaCard text='Confirmed Cases' value={confirmed}  color='#C53030'/>
            <MediaCard text='Recoverd Cases' value={recovered} color='#97266D'/>
            <MediaCard text='Death Cases' value={deaths} color='#0987A0'/>
            
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
            <div className='graph'>
        <Bar data={{
          labels: ['confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#C53030', '#97266D', '#0987A0'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}/>
        </div>
        </Grid>
    
        </Grid>
</>
    )
}

export default Api;



