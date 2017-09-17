import React from 'react'
import PropTypes from 'prop-types';

const BatteryIcon = (props) => {
    return (
    <div>
      <svg className="Battery" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 38 54" aria-labelledby="title">
 	      <title id="title">Battery Icon</title>
          <path id="path0_fill" fill={props.fill} d="M 11.25 0L 33.75 0L 20.25 21.9231L 36 21.9231L 6.75 57L 14.85 30.6923L 0 30.6923L 11.25 0Z"/>
     </svg>
   </div>
  )
}
BatteryIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
  fill: PropTypes.string,
}
BatteryIcon.defaultProps = {
  width: 96,
  height: 124,
  fill: '#25232E',
}

export default BatteryIcon
