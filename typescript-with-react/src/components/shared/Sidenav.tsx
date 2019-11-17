import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        marginTop: 65,
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
        zIndex: 1099
    }
}));

export default function AppSidenav() {

    const classes = useStyles();
    const toggleSidenav = () => {
        const currentlyOpen = state.sidenavOpen;
        setState({...state, sidenavOpen: !currentlyOpen});
    }

    const [state, setState] = React.useState({
        sidenavOpen: false
    });

    return (
        <div>
            <IconButton edge="start" color="inherit" onClick={toggleSidenav}>
                <MenuIcon />
            </IconButton>
            <Drawer open={state.sidenavOpen}
                onClose={toggleSidenav}
                role="presentation">
                <div className={classes.toolbar}>
                    <List className={classes.list}>
                        <ListItem>Test</ListItem>
                    </List>
                </div>

            </Drawer>
        </div>
    );
}