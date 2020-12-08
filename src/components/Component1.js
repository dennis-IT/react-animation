import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Component1 = () => {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            { props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus turpis et semper suscipit. Nam venenatis arcu sit amet ipsum dictum, a imperdiet sapien dictum. Maecenas ac pulvinar mauris, nec consectetur mauris. Pellentesque interdum lobortis lectus vitae malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla imperdiet nulla imperdiet libero sodales, sit amet commodo ex rutrum. Donec dignissim urna eget massa mollis iaculis. Integer aliquet, mi eu tincidunt ultricies, odio dolor ultricies dolor, et consequat metus purus vel mi. </p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}
                        >
                            {props => (
                                <div style={props}>
                                    <div style={counter}>
                                        <h1>{props.number.toFixed()}</h1>
                                    </div>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
    );
};

const c1Style = {
    background: 'lightgrey',
    color: 'darkred',
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
};

const counter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '1rem auto'
};

export default Component1;


