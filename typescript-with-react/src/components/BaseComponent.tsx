import React from 'react';

export default class BaseComponent extends React.Component<{}, any> {

    protected host: string = "localhost";
    protected port: number = 3000;
    protected apiVersion: string = "v1";

    constructor(props: any) {
        super(props);
    }

}