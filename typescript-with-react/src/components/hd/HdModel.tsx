import { Model } from "../../util/Model";

export interface HD extends Model {

    id: number;
    DM: string;
    Ptm: number;
    q_Ptg: number;
    Rem: string | null;
    SpectralType: string;
    intensity: number;

}