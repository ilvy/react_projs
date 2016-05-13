import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './sidebar'

class MyApp extends React.Component {
    render () {
        return (
              <div>
                <div id="toolbar-wrap"></div>
				<div id="sidebar-wrap"></div>
				<div id="main-content-wrap"></div>
              </div>
        	)
    }
}

ReactDOM.render(<Sidebar />,
    document.getElementById('content-wrap'));
