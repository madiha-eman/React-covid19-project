import Axios from 'axios'
import React, { useState, useEffect} from 'react'



function Api2() {
    const [countries, setCountriesRoute]= useState([])
    useEffect(() => {
        Axios.get('https://api.covid19api.com/').then(res => {
            console.log(res.data)
            setCountriesRoute(res.data.countryRoutePremiumData.path)
        })
    },[])
    return (
        <div>
        
        </div>
    )
}

export default Api2;
