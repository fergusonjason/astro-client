import React from "react";

import { Switch , Route } from "react-router-dom";
import HdComponent from "../hd/hd";
import YaleComponent from "../yale/yale";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {

    return createStyles({
        toolbar: theme.mixins.toolbar,
    });
});

export default function AppBody() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path="/" component={HdComponent} />
                <Route path="/hd" component={HdComponent} />
                <Route path="/ybs" component={YaleComponent} />
            </Switch>
        </div>


    )
}