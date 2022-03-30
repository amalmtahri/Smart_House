import { Floor } from "./floor";
import { User } from "./user";

export interface House {
    id:number;
    name: string;
    address: string;
    user: User;
    floors : Array<Floor> ;
}
