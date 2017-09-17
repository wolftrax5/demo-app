import React from 'react'
import PropTypes from 'prop-types';

const HumidityIcon = (props) => {
    return (
    <div>
      <svg className="Humidity" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 48 64" aria-labelledby="title">
 	      <title id="title">temp Icon</title>
          <path id="path0_fill" fill={props.fill} d="M 13.5689 62C 6.10601 62 0 55.8 0 48.2222C 0 44.7778 1.35689 41.5056 3.39223 39.0944L 3.39223 10.3333C 3.39223 4.65 7.97173 0 13.5689 0C 19.1661 0 23.7456 4.65 23.7456 10.3333L 23.7456 39.0944C 25.7809 41.5056 27.1378 44.7778 27.1378 48.2222C 27.1378 55.8 21.0318 62 13.5689 62ZM 16.9611 42.3667L 16.9611 34.9611L 16.9611 17.2222L 16.9611 10.3333C 16.9611 8.43889 15.4346 6.88889 13.5689 6.88889C 11.7032 6.88889 10.1767 8.43889 10.1767 10.3333L 10.1767 17.2222L 10.1767 34.9611L 10.1767 42.3667C 8.14134 43.5722 6.78445 45.8111 6.78445 48.2222C 6.78445 52.0111 9.83745 55.1111 13.5689 55.1111C 17.3004 55.1111 20.3534 52.0111 20.3534 48.2222C 20.3534 45.6389 18.9965 43.4 16.9611 42.3667ZM 13.5689 53.3889C 10.6855 53.3889 8.48057 51.15 8.48057 48.2222C 8.48057 45.9833 9.83745 44.0889 11.8728 43.4L 11.8728 34.4444L 15.265 34.4444L 15.265 43.4C 17.3004 44.0889 18.6572 45.9833 18.6572 48.2222C 18.6572 51.15 16.4523 53.3889 13.5689 53.3889Z"/>
          <path id="path1_fill"  transform='translate(30 40)' fill={props.fill} d="M 8.65018 -6.56976e-07L 14.5866 6.02778C 17.9788 9.47222 17.9788 14.8111 14.5866 18.2556C 11.1943 21.7 5.9364 21.7 2.54417 18.2556C -0.848055 14.8111 -0.848055 9.47222 2.54417 6.02778L 8.65018 -6.56976e-07Z"/>
     </svg>
   </div>
  )
}
HumidityIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}
HumidityIcon.defaultProps = {
  width: 96,
  height: 124,
  fill: '#25232E',
}

export default HumidityIcon
