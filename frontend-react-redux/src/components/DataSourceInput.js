// bring in built in methods
import React, { Component } from 'react'

 // bring in action
import { addDataSource } from '../actions/addDataSource'

// bring in local component
import Graph from '../components/Graph'

// styling
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

import { connect } from 'react-redux'


class DataSourceInput extends Component {
    // initial state store and key for visiblity rendering
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
    

    state = {
        name: "",
        info_url: "",
        screenshot_url: "",
        visible: false

    }


    // state will be updated everytime the form value changes
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // visible key will show as true to confirm before calling fetch.
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({visible: true})
    }

    handleSave = () => {
        this.props.addDataSource({name: this.state.name, info_url: this.state.info_url, screenshot_url: this.state.screenshot_url})
        this.setState({
            name: "",
            info_url: "",
            screenshot_url: "",
            visible: false,
            view: true
        })

    }

    // visible state is changed on confirmation
    handleClick = () => {
        this.setState ({visible: true})
    }

    // state set to initial value before post fetch
    handleCancel = () => {
        this.setState({
            name: "",
            info_url: "",
            screenshot_url: "",
            visible: false,
        })
    }



 render() {
    // determine what content to return
    const validated = this.state.name.length > 10 && this.state.info_url.length > 10 && this.state.screenshot_url.length > 10

    if (this.state.visible === false) {
        // render form input to new data source
        return (
            
            <Card>

                 <Card.Header> Search Google for relevant data sources </Card.Header> 
                   <form method = "get" title = "Search Form" action="https://cse.google.com/cse.js?cx=012056199083638932151:g7nct1fc1mb">
                        <div>
                            <div className="gcse-search"></div>
                        </div>
                   </form>
               

                <Card.Header> Add New Data Source</Card.Header>
                <Form onSubmit={event => this.handleSubmit(event)}>

                   

                    <Form.Group>
                        <Form.Control size="lg" type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name of Source" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control size="lg" type="text" name="info_url" value={this.state.info_url} onChange={event => this.handleChange(event)} placeholder="Source URL" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control size="lg" type="text" name="screenshot_url" value={this.state.screenshot_url} onChange={event => this.handleChange(event)} placeholder="Source URL image" />
                    </Form.Group>


                    <Form.Group>
                        <Button disabled={!validated} type="submit">Add Source</Button>
                    </Form.Group>
                </Form>
            </Card>
        )
    }
    else {
        // returns temp local state store to confirm  sending fetch request
            return (
                <Card>
                    <Card.Header>Confirm Addition of New Data Source</Card.Header>
                    <Card.Text>
                        <Button type="submit" onClick={this.handleSave}>Save to Database</Button>
                        <Button type="submit" variant="danger" onClick={this.handleCancel}>Cancel</Button>
                    </Card.Text>
                    <Graph graph={this.state} />
                </Card>
            )
        }
    }
}




//Dispatch to props
export default connect (null, {addDataSource})(DataSourceInput)


