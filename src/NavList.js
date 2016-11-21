import React, { Component } from 'react';
import {List, ListItem} from 'material-ui';
import {browserHistory} from 'react-router';

class NavList extends Component {

    render() {

        var exploreData = function(obj) {
            var array = [];

            if (obj !== null && typeof(obj) === 'object') {
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        var isTerminal = true;
                        for (var childProp in obj[prop]) {
                            var child = obj[prop][childProp];
                            if (child && child !== null && typeof(child) === 'object') {
                                isTerminal = false;
                                break;
                            }
                        }
                        
                        var nestedItems = exploreData(obj[prop]);
                        if (nestedItems.length === 0) {
                            array.push(null);
                            continue;
                        }
                        
                        var listItem = null;
                        
                        // Nested list item
                        if (!isTerminal) {
                            listItem = (
                                <ListItem 
                                    key={prop}
                                    primaryText={prop.charAt(0).toUpperCase() + prop.slice(1)}
                                    disabled={true}
                                    initiallyOpen={true}
                                    nestedItems={nestedItems} />
                            );
                            
                        // Terminal list item, clickable
                        } else {
                            let itemName = prop;
                            listItem = (
                                <ListItem 
                                    key={prop}
                                    primaryText={prop.charAt(0).toUpperCase() + prop.slice(1)}
                                    onClick={() => {
                                        browserHistory.push(
                                            (itemName !== 'contact' ? '/projects/' : '/')
                                            + itemName
                                        );
                                    }} />
                            );
                        }

                        array.push(listItem);
                    }
                }
            }

            return array;
        }

        return (
            <List>
                {exploreData(this.props.list)}
            </List>
        );
    }

}

export default NavList;