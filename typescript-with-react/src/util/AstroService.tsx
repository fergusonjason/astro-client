import fetch from "node-fetch";


export default class AstroService<T> {

    constructor(private baseUrl: string) {

    }

    getPage = async (catalog: string, start: number, stop: number): Promise<any> => {

        console.log("Entered getPage()");

        const url = `${this.baseUrl}/${catalog}/page?start=${start}&end=${stop}`;
        return new Promise(resolve => {
            fetch(url,{method: "GET"})
                .then(response => response.json())
                .then(body => resolve(body));
        });

    }
}