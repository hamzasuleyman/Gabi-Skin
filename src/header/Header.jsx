import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, MenuItem, Menu } from '@material-ui/core';
import { AccountCircle, ShoppingCart, Home as HomeIcon, ContactPhone, AttachMoney } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar position="fixed" style={{ boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#FFF' }}>
            <Toolbar>

                <Typography
                    className=' absolute left-[120px] md:left-[60px] lg:left-[50px] md:flex lg:flex'
                    variant="h6" style={{ flexGrow: 1, color: "black" }}>
                    Gabiskin
                </Typography>

                <div className='hidden md:flex lg:flex absolute left-[230px] justify-between list-none text-black'>
                    <li className='mx-5'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className='mx-5'>
                        <Link to="/pricing">
                            Pricing
                        </Link>
                    </li>

                    <li className='mx-5'>
                        <Link to="/Works">
                            Works
                        </Link>
                    </li>
                    <li className='mx-5'>
                        <Link to="/Works">
                            About
                        </Link>
                    </li>

                </div>
                <div className='absolute top-2 right-6 text-black'>
                    <IconButton
                        color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>

                {isMobile && (
                    <div className='md:hidden lg:hidden'>
                        <IconButton edge="end" color="black"
                            onClick={handleMenu}>
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
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to="/">
                                    Home
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/pricing">
                                    Pricing
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/Works">
                                    Works
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/Works">
                                    About
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>


    );
};

export default Header;