import React from 'react';
import Nav from '../components/Nav';

const Layout = (props) => {
    return (
        <div>
            <Nav />
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;
