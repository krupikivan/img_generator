import React, { Component } from 'react'

class Spinner extends Component {
  render (): JSX.Element {
    return (
    <div className="loader center">
    <i className="fa fa-cog fa-spin" />
    </div>
    )
  }
}

export default Spinner
