import React from 'react';
import {Header} from 'native-base';
import AppBar from './AppBar';

const Layout= props => {
    return (<>
    <AppBar title= {props.title}></AppBar>
    {props.children}
    </>)
}

export default Layout; 