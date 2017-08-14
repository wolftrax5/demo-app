import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'
import styles from './Panel.css'

const Panel = (props) => {

  return (
    <section className="panel">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.children}
    </section>
  )
}
Panel.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Panel
