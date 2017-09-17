import React from 'react'
import PropTypes from 'prop-types';

import './CardX2.css'

const CardX2 = (props) => {

  return (
    <section className="cardx2">
      <div className="cardx2-data">
        <div className="cardx2-data-slides">
          <div className="cardx2-data-inf">
            <div>{props.slide1}</div>
            <div className="normal">{props.slide1title}</div>
          </div>
          <div className="cardx2-data-inf">
            <div>{props.slide2}</div>
            <div className="normal">{props.slide2title}</div>
          </div>
        </div>
      </div>
      <h5 className="title">{props.title}</h5>
    </section>
  )
}
CardX2.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardX2
