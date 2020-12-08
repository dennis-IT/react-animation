import React from 'react';
import { useState } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

const Layout1 = () => {
    const [showComponent3, setShowComponent3] = useState(false);

    const toggle = () => {
        setShowComponent3(!showComponent3);
    };

    return (
        <React.Fragment>
            <Component1 />
            <Component2 toggle={toggle} />
            <Transition
                native
                items={showComponent3}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {show => show && (props => (
                    <animated.div style={props}>
                        <Component3 />
                    </animated.div>
                ))}
            </Transition>
        </React.Fragment>
    );
};

export default Layout1;
