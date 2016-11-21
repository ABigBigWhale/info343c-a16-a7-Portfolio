import React, { Component } from 'react';
import {Divider} from 'material-ui';

class Contact extends Component {

    getItem(o, key) {
        if( o.hasOwnProperty(key) ){
            return o[key];
        }
        var result, p; 
        for (p in o) {
            if ( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
                result = this.getItem(o[p], key);
                if (result && result !== null) {
                    return result;
                }
            }
        }
        return result;
    }

    render() {
        let obj = this.getItem(require('./portfolio.json'), 'contact');
        console.log(Object.keys(obj));

        const styleDiv = {
            margin: '20px'
        };

        return (
            <div>
                <h1>Contact me</h1>
                <Divider />
                <div>
                    {Object.keys(obj).map((key) => {
                        return (
                            <div className='row' key={key}>
                                <div style={styleDiv}>
                                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                    <p>{obj[key]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default Contact;