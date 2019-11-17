import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";


import AstroService from "../../util/AstroService";
import { HD } from './HdModel';
import BaseComponent from '../BaseComponent';

const root = {
    marginLeft: "250px"
}

export default class HdComponent extends BaseComponent {

    private astroService: AstroService<HD>;

    private baseUrl: string = "";

    constructor(props: any) {

        super(props);
        this.state = {
            displayedItems: []
        }

        this.baseUrl = `http://${this.host}:${this.port}/${this.apiVersion}`;
        // TODO: Use a singleton astroservice between all components
        this.astroService = new AstroService<HD>(this.baseUrl);
    }

    async componentDidMount() {

        console.log("Entered componentDidMount hd");
        try {
            const data = await this.astroService.getPage("hd",0, 20);
            console.log(data);
            this.setState({displayedItems: data.result});
        } catch (err) {

        }


    }

    render() {
        return (
            <div style={root}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" color="primary">ID</TableCell>
                            <TableCell align="center">Photovisual Magnitude</TableCell>
                            <TableCell align="center">Photographic Magnitude</TableCell>
                            <TableCell align="center">Intensity</TableCell>
                            <TableCell align="center">Spectral Type</TableCell>
                            <TableCell>Remark</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.displayedItems.map((item: any) => (
                                <TableRow key={item.ID}>
                                    <TableCell align="center">{item.ID}</TableCell>
                                    <TableCell align="center">{item.Ptm}</TableCell>
                                    <TableCell align="center">{item.Ptg}</TableCell>
                                    <TableCell align="center">{item.intensity}</TableCell>
                                    <TableCell align="center">{item.SpectralType}</TableCell>
                                    <TableCell>{item.Rem}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}