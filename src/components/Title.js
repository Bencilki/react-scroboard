import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Title extends Component {

    static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (<div>
        <h1> {this.props.content} </h1>
            </div>
        )
    }
}