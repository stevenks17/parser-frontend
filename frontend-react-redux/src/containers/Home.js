// this helps pull in the built-in methods for components that React has *important this is where you can get lifecycle methods from.
import React, { Component } from 'react'

// importing local components
import Graph from '../components/Graph'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'

// import to use state data
import { connect } from 'react-redux'

// import styling from bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class Home extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col>
                    {/* This should render forms so graphs are loaded to dashboard and then clears the dashboard */}
                    <DropdownInput />
                    </Col>
                </Row>

                {/* Iterate through graphs that have loaded and render the graph component and buttons for each passing down a specific graph as a prop */}
                <Row>
                    {this.props.graphs.map((graph) => {

                        return (
                            <Col xs={3} >
                                <Card className="text-center" key={graph.id}>
                                    <Graph graph={graph}/>
                                    <InteractButton graph={graph} />
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }


}

// this maps graph data to props to be accessed with this.props.graphs //
const mapStateToProps = state => {
    return {
        graphs: state.graphs
    }
}

export default connect (mapStateToProps)(Home)