import {Component} from 'react'
import {render} from 'react-dom'
import {withState} from 'recompose'
import DocumentTitle from 'react-document-title'

import cs from './styles.css'

class MainView extends Component {
  render () {
    return (
      <DocumentTitle title={this.props.title}>
        <h1 className={cs.txt}>{this.props.title}</h1>
      </DocumentTitle>
    )
  }
}

const App = withState('title', 'setTitle', 'XYZ')(MainView)
render(<App/>, document.getElementById('app'))
