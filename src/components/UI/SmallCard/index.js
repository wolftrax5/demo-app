import React from 'react'
import PropTypes from 'prop-types';

import './SmallCard.css'

const SmallCard = (props) => {

  return (
    <section className="small_card">
      <div className="small_card-data">
        <div className="small_card-data-inf">
          {props.children}
          <span className="normal">
            {props.unit}
          </span>
        </div>
        <h5 className="normal">{props.title}</h5>
      </div>
      <div className="small_card-icon">
        {props.icon}
      </div>
    </section>
  )
}
SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  unit:  PropTypes.string
}

export default SmallCard
