import React from 'react';
import {weatherApi} from '../api';

export default class extends React.Component{
    weatherLog = (lat, lon) => {
        try{
            console.log(
                weatherApi.current(lat, lon)
            );
    
            this.setState({});
        }catch(error){
            console.log(error)
        }
    }
    
    render(){
        return(
            <>
            </>
        )
    }
}