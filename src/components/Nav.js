import React from 'react';
import uuid from 'react-uuid';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1
        },
        [theme.breakpoints.up('sm')]: {
            marginRight: '10rem'
        },
    },
    headerOptions: {
        display: 'flex',
        flex: 1
    },
    buttonStyle: {
        color: 'ivory',
        fontSize: '1.25rem',
        width: '12rem'
    }
}));

const Navbar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Down: Small or smaller | Up: Bigger

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl);
        setAnchorEl(null);
    };

    const handleButtonClick = pageUrl => {
        history.push(pageUrl);
    };

    //Shrink the code
    const menuItems = [
        {
            itemTitle: 'React-spring',
            itemUrl: '/'
        },
        {
            itemTitle: 'AOS',
            itemUrl: '/aos'
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        REACT ANIMATION
                    </Typography>

                    {isMobile ? (
                        <div>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map((menuItem) => {
                                    return (
                                        <MenuItem key={uuid()} onClick={() => handleMenuClick(menuItem.itemUrl)}>{menuItem.itemTitle}</MenuItem>
                                    );
                                })}
                            </Menu>
                        </div>
                    )
                        : (
                            <div className={classes.headerOptions}>
                                {menuItems.map((menuItem) => {
                                    return (
                                        <Box key={uuid()} mr={4}><Button variant="outlined" color="secondary" className={classes.buttonStyle} disableElevation onClick={() => handleButtonClick(menuItem.itemUrl)}>{menuItem.itemTitle}</Button></Box>
                                    );
                                })}
                            </div>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Navbar);