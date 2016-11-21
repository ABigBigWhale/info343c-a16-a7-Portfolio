import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Sidebar from 'react-sidebar';
import {AppBar, Avatar} from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

import NavList from './NavList';

class MainLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
            sidebarDocked: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.getChildContext = this.getChildContext.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    componentWillMount() {
        var mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, sidebarDocked: mql.matches});
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: this.state.mql.matches});
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        const avatarStyle = {
            margin: '20px'
        }

        const sidebarStyles = {
            sidebar: {
                width: '300px'
            }
        };
        
        const sidebarContent = (
            <div>
                <div className='center'>
                    <Avatar src='./img/avatar.jpg'
                        size={100}
                        style={avatarStyle} />
                </div>
                <NavList list={this.props.data} />
            </div>
        );

        var content = (
            <div className='content'>
                <header>
                    <AppBar 
                        title='Portfolio'
                        onLeftIconButtonTouchTap={() => {
                            this.setState({sidebarDocked: !this.state.sidebarDocked});
                        }}
                        iconClassNameRight='fa fa-home'
                        onRightIconButtonTouchTap={() => {
                            browserHistory.push('/');
                        }}/>
                </header>
                <main className='main' >
                    <div className='container'>
                        {this.props.content || <h1>Welcome to my portfolio!</h1>}
                    </div>
                </main>
                <footer className='page-footer grey white-text'>
                    <div className='container'>
                        <p><b>Hao Liu</b></p>
                        <p>University of Washington</p>
                    </div>
                </footer>
            </div>
        );

        return (
            <div>
                <Sidebar 
                    sidebar={sidebarContent}
                    children={content}
                    open={this.state.sidebarOpen}
                    docked={this.state.sidebarDocked}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={sidebarStyles}>
                </Sidebar>

            </div>
        );
    }

}

MainLayout.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default MainLayout;