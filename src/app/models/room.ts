import { Device } from "./device";
import { Floor } from "./floor";

export interface Room {
    id:number;
    number:number;
    floor: Floor;
    devices : Device[];
    
}
