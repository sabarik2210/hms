import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import sidebar_items from '../../assets/jsonData/sidebar_routes.json'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HMS from '../../assets/images/logo.png'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AccountMenu from '../TopNav/AccountIcon';
import '../Sidebar/sidebar.css'
import { Link } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f5f7fd',
    marginTop: '20px',
    alignItems: 'center',
    marginLeft: 0,
    borderRadius: '50px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '480px',
        height: '55px'
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
        padding: theme.spacing(1.8, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(6)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40ch',
            color: '#000',
            // '&:focus': {
            //     width: '20ch',
            // },
        },
    },
}));

const drawerWidth = 240;

function SideBarNew(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const active = props.active ? 'active' : ''
    const drawer = (
        <div style={{ marginTop: '30px' }}>
            <Toolbar>
                <img src={HMS}></img>
            </Toolbar>

            <List>
                {sidebar_items.map((text, index) => (
                    <ListItem key={text} disablePadding >
                        <Link to={text.route} style={{ textDecoration: 'none' }} >
                            <ListItemButton sx={{ '&:hover': { background: '#fff', textDecoration: 'none' } }}>
                                <ListItemIcon className={`sidebar__item-inner `}>
                                    <i className={text.icon}></i>
                                </ListItemIcon>
                                <ListItemText primary={text.display_name} sx={{ textDecoration: 'none' }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', mt: 2 }}>
            <CssBaseline />
            <AppBar elevation={0}
                position="fixed"
                sx={{
                    background: '#fff',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    height: '100px',
                }}
            >

                <Box sx={{ flexGrow: 1, }}>
                    <Toolbar sx={{ alignItems: 'end', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: '#acb2b8' }} />
                            </SearchIconWrapper>

                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-evenly', width: '23%', alignItems: 'center' }}>
                            <NotificationsOutlinedIcon sx={{ color: '#929bb5', fontWeight: '100', fontSize: '35px', cursor: 'pointer' }} />
                            <MessageOutlinedIcon sx={{ color: '#929bb5', fontWeight: '100', fontSize: '35px', cursor: 'pointer' }} />
                            <AccountMenu />
                        </div>

                    </Toolbar>
                </Box>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, mt: 5, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

            </Box>
        </Box>
    );
}

SideBarNew.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SideBarNew;