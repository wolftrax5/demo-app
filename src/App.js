import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo-2.svg';
import CircleChart from './components/CircleChart';
import DirectionChar from './components/DirectionChar';
import dataFormat from './util'
import TempGraf from './components/TempGraf'
import PresionChart from './components/PresionChart'
import SpeedChart from './components/SpeedChart'
import LabelData from './components/LabelData'
import BatteryData from './components/BatteryData'
import HumidityIcon from './components/UI/Icons/HumidityIcon'
import WindSpeedIcon from './components/UI/Icons/WindSpeedIcon'
import RainIcon from './components/UI/Icons/RainIcon'
import BatteryIcon from './components/UI/Icons/BatteryIcon'

import './App.css';

const deviceId = "4201512464211624";
const url = `http://api.beelan.mx/v1/uplink/${deviceId}`;
const options = {
  method: "GET",
  headers: {
    authorization: "rpmDTu2rLmyH6NgjGpGs8fubaHg=",
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data1: 30,
      data2: 45.5,
      data: [
        {ref: "01", type: "02", typeName: "analogInput", data: 225},
        {ref: "02", type: "02", typeName: "analogInput", data: 1.49},
        {ref: "03", type: "68", typeName: "humiditySensor", data: 76.5},
        {ref: "04", type: "67", typeName: "temperatureSensor", data: 69.5},
        {ref: "05", type: "02", typeName: "analogInput", data: 0.01},
        {ref: "06", type: "02", typeName: "analogInput", data: 0.26},
        {ref: "07", type: "73", typeName: "barometer", data: 813.5},
        {ref: "08", type: "02", typeName: "analogInput", data: 2.34},
        {ref: "09", type: "65", typeName: "illuminanceSensor", data: 0},
      ],
      refsNames: {
        '01': 'winddir',
        '02': 'windspeedmph',
        '03': 'humidity',
        '04': 'tempf',
        '05': 'rainin',
        '06': 'dailyrainin',
        '07': 'pressure',
        '08': 'batt_lvl',
        '09': 'light_lvl',
      }
    }
  }
  componentWillMount() {
    console.warn(options);
    fetch(url, options)
      .then((res) => res.json())
      .then((arrayData) =>  dataFormat.base64toHEX(arrayData[0].data))
      .then(hexaData => dataFormat.getValue(hexaData))
      .then(result => this.setState({
        data: result
      }))
    this.timer = setInterval(() => {
      fetch(url, options)
        .then((res) => res.json())
        .then((arrayData) =>  dataFormat.base64toHEX(arrayData[0].data))
        .then(hexaData => dataFormat.getValue(hexaData))
        .then(result => this.setState({
          data: result
        }))
    }, 30000);
    // dataFormat.getValue()
  }
  componentWillUnmount() {
  clearInterval(this.timer);
}
  render() {
    const {data, refsNames} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <h2>Station <u>Aguascalientes, Ags</u></h2>
        </div>
        <div className="chartsSections">
            <div>
              <TempGraf  data={data[3].data}/>
             </div>

             <div className="section-label" >
               <DirectionChar refs={'01'} title={refsNames['01']} data={data[0].data}/>
               <div className="section-label-small">
                 <div className="smalls">
                   <LabelData refs={'02'} title={refsNames['02']}  text="mp/h" data={data[1].data} icon={<WindSpeedIcon width={74} height={66}/>}/>
                   <LabelData title={refsNames['03']}  text="%" data={data[2].data} icon={<HumidityIcon width={48} height={62}/>}/>
                 </div>
                 <div className="smalls">
                   <LabelData title={refsNames['05']}  text="%" data={data[4].data} icon={<RainIcon width={70} height={70}/>}/>
                   <LabelData title={refsNames['08']}  text="V" data={data[7].data} icon={<BatteryIcon width={36} height={57}/>}/>
                 </div>
               </div>

             </div>
        </div>
      </div>
    );
  }
}

export default App;
