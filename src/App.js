import React, { Component } from 'react';
import MainLayout from './MainLayout';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {}
        }
    }
    
    componentDidMount() {
        var dataFile = require('./portfolio.json');
        console.log(dataFile);
        this.setState({data: dataFile});
    }


    render() {
        return <MainLayout data={this.state.data} content={this.props.children} />
    }
}

export default App;
