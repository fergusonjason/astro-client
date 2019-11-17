import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) => {
  console.log(`drawer zindex: ${theme.zIndex.drawer}`);
  console.log(`Appbar zindex: ${theme.zIndex.appBar}`);

  return createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      // zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        zIndex: theme.zIndex.appBar - 1,
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    paddedElement: {
      marginTop: 10,
      marginBottom: 10
    },
    link: {
      paddingLeft: 20,
      paddingTop: 5,
      paddingBottom: 5,
      textDecoration: "none"
    }
  }
  );

}

);

export default function AppHeader() {

  const [state, setState] = React.useState({
    sidenavOpen: false
  });

  const toggleSidenav = () => {
    const currentlyOpen = state.sidenavOpen;
    setState({...state, sidenavOpen: !currentlyOpen});
  }

  const classes = useStyles();

  console.log(JSON.stringify(classes));
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleSidenav}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" >Astronomical Catalog Client (React)</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                BackdropProps={{ invisible: true }}
                className={classes.drawer}
                open={state.sidenavOpen}
                onClose={toggleSidenav}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper
                }}
                >
                <div className={classes.toolbar} />
                <Typography variant="h5" className={classes.paddedElement}>Catalogs</Typography>
                <Divider />
                <Link href="/hd" variant="body1" align="left" className={classes.link}>HD Catalog</Link>
                <Link href="/ybs" variant="body1" align="left" className={classes.link}>Yale Bright Star Catalog</Link>
                <Link href="/ngc2000" variant="body1" align="left" className={classes.link}>NGC2000 Catalog</Link>
            </Drawer>
        </div>
    );
}