import React from 'react';
import uuid from 'react-uuid';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
//import { MenuItem, Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SideDrawer from './SideDrawer';

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
    const [sidebarOpened, setSidebarOpened] = React.useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Down: Small or smaller | Up: Bigger


    //TODO: Below is code for normal nav drop down
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [menuOpened, setMenuStyle] = React.useState(false);
    // const open = Boolean(anchorEl);

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    //     setMenuStyle(true);
    // };

    // const handleMenuClick = (pageUrl) => {
    //     history.push(pageUrl);
    //     handleMenuClose();
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     setMenuStyle(false);
    // };

    const handleButtonClick = pageUrl => {
        history.push(pageUrl);
    };

    // TODO: Update state of parent from child component sidedrawer
    const handleChange = (newValue) => {
        setSidebarOpened(newValue);
    };

    //Shrink the code
    const menuItems = [
        {
            itemTitle: 'REACT-SPRING',
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
                                // onClick={handleMenu}
                                onClick={() => setSidebarOpened(!sidebarOpened)}
                                style={{ padding: '1.25rem 1.25rem' }}
                            >
                                {/* {!menuOpened ? (<MenuIcon />) : (<MenuOpenIcon />)} */}
                                <MenuIcon />
                            </IconButton>

                            {/* TODO: Below is for normal nav dropdown */}
                            {/* <Menu
                                id="menu-appbar"
                                getContentAnchorEl={null}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                onClose={handleMenuClose}
                            >
                                {menuItems.map((menuItem) => {
                                    return (
                                        <MenuItem key={uuid()} onClick={() => handleMenuClick(menuItem.itemUrl)}>{menuItem.itemTitle}</MenuItem>
                                    );
                                })}
                            </Menu> */}

                            {/* TODO: Below is for nav side bar */}
                            <SideDrawer data={menuItems} anchor={'right'} status={sidebarOpened} onChange={handleChange} />
                        </div>
                    )
                        : (
                            <div className={classes.headerOptions}>
                                {menuItems.map((menuItem) => {
                                    return (
                                        <Box key={uuid()} mr={4}><Button variant="outlined" color="primary" className={classes.buttonStyle} disableElevation onClick={() => handleButtonClick(menuItem.itemUrl)}>{menuItem.itemTitle}</Button></Box>
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