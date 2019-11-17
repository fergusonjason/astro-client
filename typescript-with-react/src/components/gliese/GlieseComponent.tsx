import React, { useEffect } from 'react';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import AstroService from "../../util/AstroService";

import GlieseModel from "./GlieseModel";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            marginLeft: 250
        }
    })
});

function GlieseComponent() {

    const host: string = "localhost";
    const port: number = 3000;
    const apiVersion: string = "v1";

    const [state, setState] = React.useState({
        displayedItems: []
      });

            // TODO: Use a singleton AstroService across all components
    const astroService = new AstroService<GlieseModel>(`http://${host}:${port}/${apiVersion}`);

    useEffect(() => {

        const fetchData = async () => {
            astroService.getPage("gliese", 0, 20)
            .then((response) => {
                setState({...state, displayedItems: response.result});
            });
        }

        fetchData();

    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Proper Motion</TableCell>
                        <TableCell align="center">Proper Motion Angle</TableCell>
                        <TableCell align="center">Radial Velocity</TableCell>
                        <TableCell align="center">BV</TableCell>
                        <TableCell align="center">Parallax</TableCell>
                        <TableCell align="center">Spectral Type</TableCell>
                        <TableCell align="center">Visual Magnitude</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    state.displayedItems.map((item: GlieseModel) => (
                        <TableRow key={item.Name}>
                            <TableCell align="center">{item.Name}</TableCell>
                            <TableCell align="center">{item.pm}</TableCell>
                            <TableCell align="center">{item.pmPA}</TableCell>
                            <TableCell align="center">{item.RadialVelocity}</TableCell>
                            <TableCell align="center">{item.BV}</TableCell>
                            <TableCell align="center">{item.plx}</TableCell>
                            <TableCell align="center">{item.SpectralType}</TableCell>
                            <TableCell align="center">{item.VisualMagnitude}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </div>
    )
}

export default GlieseComponent;
