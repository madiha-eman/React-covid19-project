import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import MediaCard from './MediaCard'
import Example from './Country'

 function Api(){
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    useEffect(() => {
        Axios.get('https://covid19.mathdro.id/api').then(res =>{
           console.log(res.data)
           setConfirmed(res.data.confirmed.value);
           setRecovered(res.data.recovered.value);
           setDeath(res.data.deaths.value);
        });
     });
    return (
        <div>
            <MediaCard text='Confirmed Cases' value={confirmed}  color='#C53030'/>
            <MediaCard text='Recoverd Cases' value={recovered} color='#97266D'/>
            <MediaCard text='Death Cases' value={deaths} color='#0987A0'/>
            <Example   />

        </div>
    )
}

export default Api;



