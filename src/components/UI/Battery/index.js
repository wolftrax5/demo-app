import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'
import styles from './Battery.css'

const Battery = (props) => {
  let porcent = (props.volts * 100 )/ props.maxVolts;
  let charge = {
    height: `${porcent}%`,
  }
  const bateryload = classnames({
  ["batery--load"]: true,
  ["red"]: porcent <= 30,
  ["yellow"]: porcent >= 31 && porcent <= 59 ,
  ["green"]: porcent <= 100 && porcent >= 60,
})

  return (
    <div className="batery">
      <div className="batery--container">
      	<div className="batery--container-body">
      		<span className={bateryload} style={charge} ></span>
      	</div>
      </div>
    </div>
  )
}
Battery.propTypes = {
  volts: PropTypes.number.isRequired,
  maxVolts: PropTypes.number,
}

export default Battery
