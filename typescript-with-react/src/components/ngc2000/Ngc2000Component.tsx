import React, { useEffect } from 'react';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import AstroService from "../../util/AstroService";

import Ngc2000Model from "./Ngc2000Model";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            marginLeft: 250
        }
    })
});

function Ngc2000Component() {

    const host: string = "localhost";
    const port: number = 3000;
    const apiVersion: string = "v1";

    const [state, setState] = React.useState({
        displayedItems: []
      });

            // TODO: Use a singleton AstroService across all components
    const astroService = new AstroService<Ngc2000Model>(`http://${host}:${port}/${apiVersion}`);

    useEffect(() => {

        const fetchData = async () => {
            astroService.getPage("ngc2000", 0, 20)
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
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Magnitude</TableCell>
                        <TableCell align="center">Source</TableCell>
                        <TableCell align="center">Size</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Constellation</TableCell>
                        <TableCell align="center">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    state.displayedItems.map((item: Ngc2000Model) => (
                        <TableRow key={item.ID}>
                            <TableCell align="center">{item.ID}</TableCell>
                            <TableCell align="center">{item.magnitude}</TableCell>
                            <TableCell align="center">{item.source}</TableCell>
                            <TableCell align="center">{item.size}</TableCell>
                            <TableCell align="center">{item.Desc}</TableCell>
                            <TableCell align="center">{item.constellation}</TableCell>
                            <TableCell align="center">{item.type}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </div>
    )
}

export default Ngc2000Component;
