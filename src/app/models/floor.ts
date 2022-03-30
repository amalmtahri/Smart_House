import { Room } from "./room";

export interface Floor {
    
    id:number;
    number:number;
    rooms: Array<Room>;
}
