import { AirlineSeatReclineExtraRounded, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

// const dTheme = useTheme();

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const StyledIcons = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        gap: "20px",
    },
    alignItems: 'center',
}));


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolBar>

                <Typography variant='h6' textTransform='uppercase' sx={{ display: { xs: 'none', sm: 'block' } }}>Just Chill</Typography>
                <AirlineSeatReclineExtraRounded sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search>
                    <InputBase type='text' placeholder='Search here' fullWidth />
                </Search>
                <StyledIcons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="inherit" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="inherit" />
                    </Badge>
                    <Avatar onClick={() => setOpenMenu(!openMenu)} sx={{ width: 30, height: 30 }} alt="Rumi" src="/static/images/avatar/1.jpg" />
                </StyledIcons>


                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"

                    open={openMenu}
                    onClose={() => setOpenMenu(false)}

                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header