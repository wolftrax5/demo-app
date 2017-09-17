import React from 'react'
import PropTypes from 'prop-types';

const WindSpeedIcon = (props) => {
    return (
      <svg className="Wind" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 70 70" aria-labelledby="title">
 	      <title id="title">Wind Speed Icon</title>
         <path id="path0_fill" fill={props.fill} d="M 66.737 49.4656L 65.7778 49.6033L 61.6667 49.6033C 60.1593 49.6033 58.9259 48.3633 58.9259 46.8476C 58.9259 45.3319 60.1593 44.0919 61.6667 44.0919L 65.7778 44.0919C 67.2852 44.0919 68.5185 42.8518 68.5185 41.3361C 68.5185 39.8205 67.2852 38.5804 65.7778 38.5804C 64.2704 38.5804 63.037 37.3403 63.037 35.8246C 63.037 34.309 64.2704 33.0689 65.7778 33.0689C 65.9148 33.0689 66.1889 33.0689 66.3259 33.0689C 70.5741 33.3445 74 36.9269 74 41.3361C 74 45.6075 70.8482 49.0522 66.737 49.4656ZM 52.0741 33.0689C 50.5667 33.0689 49.3333 31.8288 49.3333 30.3132C 49.3333 28.7975 50.5667 27.5574 52.0741 27.5574C 52.2111 27.5574 52.4852 27.5574 52.6222 27.5574C 56.8704 27.833 60.2963 31.4154 60.2963 35.8246C 60.2963 40.096 57.1444 43.5407 53.1704 43.9541L 53.1704 44.0919L 52.0741 44.0919L 41.1111 44.0919C 35.6296 44.0919 25.4889 44.0919 21.9259 44.0919C 20.4185 44.0919 19.1852 45.3319 19.1852 46.8476C 19.1852 48.3633 20.4185 49.6033 21.9259 49.6033L 52.0741 49.6033L 53.1704 49.6033C 57.2815 50.1545 60.2963 53.5992 60.2963 57.7328C 60.2963 62.142 56.8704 65.5866 52.6222 66C 52.4852 66 52.2111 66 52.0741 66C 50.5667 66 49.3333 64.7599 49.3333 63.2443C 49.3333 61.7286 50.5667 60.4885 52.0741 60.4885C 53.5815 60.4885 54.8148 59.2484 54.8148 57.7328C 54.8148 56.2171 53.5815 54.977 52.0741 54.977L 21.9259 54.977L 20.8296 54.977L 20.8296 54.8392C 16.7185 54.2881 13.7037 50.8434 13.7037 46.7098C 13.7037 45.1942 14.1148 43.9541 14.8 42.714C 6.16667 39.8205 0 31.691 0 22.0459C 0 9.92067 9.86667 0 21.9259 0C 30.1481 0 37.2741 4.54697 41.1111 11.2985C 41.9333 11.1608 42.8926 11.023 43.8519 11.023C 51.937 11.023 58.6519 16.9478 60.0222 24.6639C 58.1037 23.286 55.9111 22.4593 53.4444 22.1837C 51.5259 18.8768 47.963 16.6722 43.9889 16.6722C 41.7963 16.6722 39.7407 17.3612 38.0963 18.4635C 36.1778 11.023 29.737 5.51148 21.9259 5.51148C 12.8815 5.51148 5.48148 12.952 5.48148 22.0459C 5.48148 31.1399 12.8815 38.5804 21.9259 38.5804C 25.4889 38.5804 33.163 38.5804 38.6444 38.5804L 52.0741 38.5804C 53.5815 38.5804 54.8148 37.3403 54.8148 35.8246C 54.8148 34.309 53.5815 33.0689 52.0741 33.0689Z"/>
     </svg>
  )
}
WindSpeedIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
  fill: PropTypes.string,
}
WindSpeedIcon.defaultProps = {
  width: 272,
  height: 172,
  fill: '#25232E',
}

export default WindSpeedIcon