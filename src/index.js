import React, {Component} from 'react'
import t from 'prop-types'
import { getBg, getContext2d, setSize, setCover } from './utils'

export default class ReactScratch extends Component {
  
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state     = { pressed: false }
    this.onPressed = this.onPressed.bind(this)
    this.onLoosen  = this.onLoosen.bind(this)
    this.onMove    = this.onMove.bind(this)
  }

  onPressed () {
    this.setState({ pressed: true })
    console.log('pressed')
  }

  onLoosen () {
    this.setState({ pressed: false })
    console.log('loosen')
  }

  onMove (e) {
    const { pressed } = this.state
    if (pressed) {
      // 递归算出变局
    }
  }

  componentDidMount () {
    const node = this.canvasRef.current
    setSize(node,this.props)
    setCover(node,this.props)
  }

  render () {
    return (
      <canvas style={{
                      border: '1px solid black',
                      background: getBg(this.props),
                      backgroundSize: 'cover'
                    }}
              onMouseDown={this.onPressed}
              onMouseUp={this.onLoosen}
              onMouseMove={this.onMove}
              ref={this.canvasRef} />   
    )
  }
}

ReactScratch.propTypes = {
  width: t.oneOfType([t.string,t.number]),
  height: t.oneOfType([t.string,t.number]),
  baseBg: t.string,
  coverBg: t.string,
  ratio: t.oneOfType([t.string,t.number]),
  ratioSize: t.number,
  callback: t.func
}

ReactScratch.defaultProps = {
  width: 300,
  height: 200,
  baseBg: null,
  coverBg: '#000',
  ratio: .8,
  ratioSize: 30,
  callback: () => {}
}