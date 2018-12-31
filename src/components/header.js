import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/workshops">Workshops</Link>
    <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)
export default Header
