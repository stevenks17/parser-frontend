// this helps pull in the built-in methods for components that React has *important this is where you can get lifecycle methods from.
import React, { Component } from 'react'

// this should allow the creation of multiple routes from a single page
import { BrowserRouter as Router, Route } from 'react-router-dom'

// adding local container/components should be able to be rendered through routing?
import NavBar from '../components/NavBar'
import Home from '../containers/Home'
import New from '../containers/New'
import Show from '../containers/Show'
import DataSourceInput from '../components/DataSourceInput'

// Importing bootstrap to make containers responsive
import Container from 'react-bootstrap/Container'

// adding a container and navbar that will be static to every page.
class App extends Component {
    componentDidMount() {
        (function() {
          var gcse = document.createElement('script')
          gcse.type = 'text/javascript'
          gcse.sync = true
          gcse.src = 'https://cse.google.com/cse.js?cx=012056199083638932151:g7nct1fc1mb'
          var s = document.getElementsByTagName('script')[0]
          s.parentNode.insertBefore(gcse, s)
        })();
    }
        

    render() {
        return (
            <Router>
                <Container fluid>
                    <div>
                        <NavBar />
                        <Route exact path="/" component={Home} />
                        <Route path= {'/graphs/new'} component={DataSourceInput} />
                        <Route path= {'/graphs/:id/interact'} component={New} />
                        <Route path= {'/graphs/:id/speculations'} component={Show} />


                    </div>
                </Container>
            </Router>
        )
    }
}

// Allows app to be imported and used elsewhere

export default App
