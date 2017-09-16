import React from 'react'
import PropTypes from 'prop-types';

import './Card.css'

const Card = (props) => {

  return (
    <section className="card">
      <div className="card-icon">
        {props.icon}
      </div>
      <div className="card-data">
        <div className="card-data-inf">{props.children}</div>
        <h5>{props.title}</h5>
      </div>
    </section>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card
