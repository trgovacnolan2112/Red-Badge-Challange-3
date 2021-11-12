import React, {Component} from 'react'
import Display from './WeatherDisplay'

type Locate ={
    latitude: number,
    longitude: number,
    weather: any,
};

class Weather extends Component <{},Locate>{
    constructor(props: any) {
        super(props)
        this.state ={
            latitude: 0,
            longitude: 0,
            weather: 0,
        } 
    }
    success = (pos:any) => {
        let crd = pos.coords;
        const lat: number = crd.latitude;
        const lon: number = crd.longitude;
        this.setState({
            latitude: lat,
            longitude: lon
        });
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=37f707e1986a973647faed4122426481`)
    .then(res => res.json())
    .then(data => {
        this.setState({
        weather: data.main.temp
    })
    });
}

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success)
    }

    render(){
        return (
            <div>
                <Display weather={this.state.weather} />
            </div>
        )
    }
}

export default Weather;