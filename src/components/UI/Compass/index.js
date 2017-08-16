import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'
import styles from './Compass.css'

const Compass = (props) => {
  const {direction} = props
  const needleHolder = classnames({
  ["compass--needleHolder"]: true,
  ["est"]:  direction === 'ESTE',
  ["nort"]: direction === 'NORTE',
  ["suth"]: direction === 'SUR',
  ["west"]: direction === 'OESTE'
})
  return (
    <div className="compass">
    	<div className="compass--container"></div>
    	<div className={needleHolder} >
    		<div className="compass--needleHolder_north"></div>
    		<div className="compass--needleHolder_south"></div>
    	</div>
    </div>
  )
}
Compass.propTypes = {
  direction: PropTypes.string,
}

export default Compass
