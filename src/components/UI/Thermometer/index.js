import React from 'react'
import PropTypes from 'prop-types';
import styles from './Thermometer.css'

const Thermometer = (props) => {
  // el la maxima temperatura es 120 ºF
  // el porsentaje de altura del mercurio es una regla de 3;
  const fluidheigh = (props.Fahrenheit * 100) / 120;
  let divStyle = {
    height: `${fluidheigh}%`,
    WebkitTransition: 'all',
  };
console.warn(fluidheigh)
  return (
    <div className="thermometer_container">
      <div className="thermometer">
        <div className="stem">
          <div className="fluid" style={divStyle}></div>
        </div>
      </div>
      <div className="base">{`${props.Celcius} °C`}</div>
    </div>
  )
}
Thermometer.propTypes = {
  Celcius: PropTypes.string,
  Fahrenheit: PropTypes.number,
}

export default Thermometer
