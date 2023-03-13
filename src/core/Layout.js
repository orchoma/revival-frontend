import React from 'react';
import Menu from './Menu'
import "../css/style.css";
import "../transitions.js"
import Search from './Search'



const Layout = ({className, children}) => (

<div>

    <Menu /> 

    <Search/> 

    


    <div className={className}> {children} </div>

</div>

);

export default Layout;