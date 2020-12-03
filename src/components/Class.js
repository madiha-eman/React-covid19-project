import React, { Component } from 'react'

 class Class extends Component {
    constructor(props){
        super(props)
        this.state={
            people:['confirmed', 'recovered', 'deaths']
        }
        console.log(this.state)

        get_data =()=>{
            
        }
        }
   
    render() {

        return (
            <>
            {/* <Grid container>
            {/* <Grid item xs={12} md={4} lg={4}>
                <MediaCard text='Confirmed Cases' value={confirmed}  color='#C53030'/>
                <MediaCard text='Recoverd Cases' value={recovered} color='#97266D'/>
                <MediaCard text='Death Cases' value={deaths} color='#0987A0'/>
                
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
                <div className='graph'>
           
            </div>
            </Grid>
        
            </Grid> */} */}
    </>
        )
    }
}
export default Class;
