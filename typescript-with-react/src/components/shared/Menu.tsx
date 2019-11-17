import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

export default function AppMenu() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const toggleDrawer = () => {
        
    }
    return (
        <div>
            <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="appMenu"
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem>HD Catalog</MenuItem>
            </Menu>
        </div>
    );
}