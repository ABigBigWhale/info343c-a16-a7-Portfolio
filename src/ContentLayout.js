import React, { Component } from 'react';
import {Divider, Subheader, RaisedButton, FontIcon} from 'material-ui';

class ContentLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: require('./portfolio.json')
        }
    }

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
        let obj = this.getItem(this.state.data, this.props.params.itemName);

        const styleMarginBottom = {
            marginBottom: '24px'
        }

        const styleFrame = {
            height: '800px',
            width: '100%'
        };

        return (
            <div>
                <div>
                    {obj['name'] && <h1>{obj['name']}</h1>}
                    <Subheader>{this.props.params.itemName}</Subheader>
                    <Divider />
                </div> 



                {obj['desc'] &&
                    <p>{obj['desc']}</p> 
                }


                <div className='row' style={styleMarginBottom}>
                    {obj['repo'] &&
                        <div className='col s4 m3'>
                            <RaisedButton
                                href={obj['repo']}
                                target="_blank"
                                label="Github Link"
                                secondary={true}
                                icon={<FontIcon className="muidocs-icon-custom-github" />}
                                />
                        </div>
                    }
                    {obj['link'] &&
                        <div className='col s4 m3'>
                            <RaisedButton
                                href={obj['link']}
                                target="_blank"
                                label="Web Page Link"
                                primary={true}
                                icon={<FontIcon className="muidocs-icon-custom-github" />}
                                />
                        </div>
                    }
                </div>

                {(obj['preview_link'] || obj['link']) &&
                    <iframe src={(obj['preview_link'] || obj['link'])} style={styleFrame}></iframe>
                }
            </div>

        );
    }
}

export default ContentLayout;