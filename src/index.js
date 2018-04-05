import React, {Component} from 'react'
import t from 'prop-types'

export default class ReactScratch extends Component {
  
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount () {
    const node = this.canvasRef.current
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />   
    )
  }
}

ReactScratch.propTypes = {
  width: [t.string,t.number],
  height: [t.string,t.number],
  baseImg: t.string,
  baseBg: t.string,
  coverBg: t.string,
  ratio: [t.string,t.number],
  callback: t.func
}

ReactScratch.defaultProps = {
  width: 200,
  height: 300,
  baseImg: null,
  baseBg: null,
  coverBg: '#000',
  ratio: .8,
  callback: () => {}
}