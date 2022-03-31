import { Status } from "../enums/status";
import { Floor } from "./floor";
import { Room } from "./room";

export interface Device {

    id?:number;
    status?:Status;
    name?:string;
    room?: Room;
    floor?:Floor;
}
