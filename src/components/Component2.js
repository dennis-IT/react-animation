import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'
import { Button, Box } from '@material-ui/core';

export class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                { props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>Nam commodo ex nec nisi varius porttitor. Nam iaculis tempor purus, in pulvinar magna posuere eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin quis risus lacus. Quisque at tellus non elit cursus mattis. Sed pharetra gravida gravida. Aenean venenatis massa quam, nec sollicitudin purus ornare sed.</p>
                            <br />
                            <Box display="flex" justifyContent="center">
                                <Button variant="contained" color="secondary" disableElevation onClick={this.props.toggle}>Toggle Component 3</Button>
                            </Box>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const c2Style = {
    marginTop: '1rem',
    background: 'darkblue',
    color: 'ivory',
    padding: '1.5rem',
    marginBottom: '1rem'
}

export default Component2
