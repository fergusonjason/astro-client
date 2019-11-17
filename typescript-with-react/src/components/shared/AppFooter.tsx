import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {

    return createStyles({
        toolbar: theme.mixins.toolbar,
        footer: {
            bottom: 0,
            position: "absolute",
            height: 30,
            width: "100%",
            verticalAlign: "middle"
        }
    });
});

export default function AppFooter() {

    const classes = useStyles();

    return (
        <div className={classes.footer}>I made this!</div>
    )
}