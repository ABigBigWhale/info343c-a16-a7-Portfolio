import React, { Component } from 'react';

class DashBoard extends Component {
    render() {
        const styleDiv = {
            marginTop: '20%'
        }
        
        const styleImg = {
            maxWidth: '100%',
            maxHeight: '80%'
        }

        return (
            <div>
                <h1>Welcome.</h1>
                <h4>This is my portfolio.</h4>
                <h4>Feel free to explore.</h4>
                <div style={styleDiv}>
                    <img src='./img/bear.jpg' alt='bear' style={styleImg} />
                </div>
            </div>
        );
    }
}

export default DashBoard;