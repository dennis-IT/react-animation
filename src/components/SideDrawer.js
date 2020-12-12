import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ClearIcon from '@material-ui/icons/Clear';
import { Box, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    paper: {
        background: '#F44336',
        color: 'white'
    },
    icon: {
        fontSize: '3.5rem',
        padding: '0.5rem',
        color: 'white'
    },
    listItemText: {
        textAlign: 'center',
        fontSize: '1.5rem'
    }
});

const SideDrawer = (props) => {
    const { history } = props;
    const { data, anchor, status } = props;
    const classes = useStyles();
    const [state, setState] = useState({
        sidebarStatus: status
    });

    useEffect(() => {
        setState(prevState => ({ ...prevState, sidebarStatus: status }));
    }, [status]);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    //TODO: used for updating change in parent component
    const handleChange = (open) => {
        props.onChange(open);
    };

    //TODO: for router when use click the list item
    const handleButtonClick = pageUrl => {
        history.push(pageUrl);
    };

    //TODO: click to close side drawer
    const handleClose = () => {
        toggleDrawer(false);
        handleChange(false);
    };

    const list = data => (
        <div
            className={classes.list}
            role="presentation"
            onClick={handleClose}
            onKeyDown={handleClose}
        >
            <List>
                {data.map(item => (
                    <ListItem button key={item.itemTitle} onClick={() => handleButtonClick(item.itemUrl)} >
                        <ListItemText primary={item.itemTitle} classes={{ primary: classes.listItemText }} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state.sidebarStatus}
                    onClose={handleClose}
                    onOpen={toggleDrawer(true)}
                    classes={{ paper: classes.paper }}
                >
                    <Box display='flex' justifyContent='flex-end'>
                        <IconButton onClick={handleClose} >
                            <ClearIcon className={classes.icon} />
                        </IconButton>
                    </Box>
                    {list(data)}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
};

export default withRouter(SideDrawer);
