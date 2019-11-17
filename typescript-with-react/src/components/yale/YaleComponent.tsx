import React, { useEffect } from 'react';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import AstroService from "../../util/AstroService";
import YaleModel from "./YaleModel"

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            marginLeft: 250
        }
    })
});

export default function YaleComponent() {

    const host: string = "localhost";
    const port: number = 3000;
    const apiVersion: string = "v1";

    const [state, setState] = React.useState({
        displayedItems: []
      });

      // TODO: Use a singleton AstroService across all components
    const astroService = new AstroService<YaleModel>(`http://${host}:${port}/${apiVersion}`);

    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            astroService.getPage("yale", 0, 20)
            .then((response) => {
                setState({...state, displayedItems: response.result});
            });
        }

        fetchData();

    },[]);

    return (
        <div className={classes.root}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Visual Magnitude</TableCell>
                        <TableCell align="center">Spectral Type</TableCell>
                        <TableCell align="center">BV</TableCell>
                        <TableCell align="center">NoteFlag</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    state.displayedItems.map((item: YaleModel) => (
                        <TableRow key={item.ID}>
                            <TableCell align="center">{item.ID}</TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.VisualMagnitude}</TableCell>
                            <TableCell align="center">{item.SpectralType}</TableCell>
                            <TableCell align="center">{item.BV}</TableCell>
                            <TableCell align="center">{item.NoteFlag}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </div>

    )
}

// export default class YaleComponent extends Component {
//     render() {
//         return (
//             <div>
//                 This is where the Yale Bright Star Catalog will go.
//             </div>
//         )
//     }
// }

