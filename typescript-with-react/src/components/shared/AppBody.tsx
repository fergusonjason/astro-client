import React from "react";

import { Switch , Route } from "react-router-dom";
import HdComponent from "../hd/HdComponent";
import YaleComponent from "../yale/YaleComponent";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Ngc2000Component from "../ngc2000/Ngc2000Component";
import GlieseComponent from "../gliese/GlieseComponent";

const useStyles = makeStyles((theme: Theme) => {

    return createStyles({
        container: {
            height: "calc(100vh - 130px)",
            bottom: 25,
            marginBottom: 25
        },
        toolbar: theme.mixins.toolbar,
    });
});

export default function AppBody() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path="/" component={HdComponent} />
                <Route path="/hd" component={HdComponent} />
                <Route path="/ybs" component={YaleComponent} />
                <Route path="/ngc2000" component={Ngc2000Component} />
                <Route path="/gliese" component={GlieseComponent} />
            </Switch>
        </div>


    )
}