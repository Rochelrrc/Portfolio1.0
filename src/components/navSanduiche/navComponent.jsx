import './styles.css';
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const NavSanduiche = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const listItemStyle = {
        color: 'white', // Cor do texto dos itens
    };

    return (
        <div className='container-geral-sanduiche'>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
            >
                <MenuIcon sx={{ color: 'red' }} />
            </IconButton>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
                sx={{ '& .MuiDrawer-paper': { backgroundColor: '#363A36' } }}
            >
                <List>
                    <ListItem button onClick={handleDrawerClose} style={listItemStyle}>
                        <a
                            href="#home"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                backgroundColor: '#363A36',
                                '&:hover': {
                                    color: 'red', // Adicione a cor desejada para o hover
                                },
                            }}
                            onClick={handleScrollToTop}
                        >
                            <ListItemText primary="Home" sx={{ '&:hover': { color: 'red' } }} />
                        </a>
                    </ListItem>

                    <a
                        href="#sobreMim"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            backgroundColor: '#363A36',
                            '&:hover': {
                                color: 'red', // Adicione a cor desejada para o hover
                            },
                        }}

                    >
                        <ListItem button onClick={handleDrawerClose} style={listItemStyle}>
                            <ListItemText primary="Sobre" sx={{ '&:hover': { color: 'red' } }} />
                        </ListItem>
                    </a>

                    <a
                        href="#projetos"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            backgroundColor: '#363A36',
                            '&:hover': {
                                color: 'red', // Adicione a cor desejada para o hover
                            },
                        }}

                    >
                        <ListItem button onClick={handleDrawerClose} style={listItemStyle}>
                            <ListItemText primary="Projetos" sx={{ '&:hover': { color: 'red' } }} />
                        </ListItem>
                    </a>

                    <a
                        href="#sobreMim"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            backgroundColor: '#363A36',
                            '&:hover': {
                                color: 'red', // Adicione a cor desejada para o hover
                            },
                        }}

                    >
                        <ListItem button onClick={handleDrawerClose} style={listItemStyle}>
                            <ListItemText primary="Contato" sx={{ '&:hover': { color: 'red' } }} />
                        </ListItem>
                    </a>
                </List>
            </Drawer>


        </div >
    );
};

export default NavSanduiche;
