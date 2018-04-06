import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactScratch from '../../src'

const baseBg = "http://os33nc36m.bkt.clouddn.com/FiXqeVa9OaZHb7empMXZrETKte9F"

class Demo extends Component {
  render() {
    return (
      <ReactScratch baseBg={baseBg} 
                    coverBg="#006060"
                    callback={() => console.log('hello react scratch')}
      />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
