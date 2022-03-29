import { Device } from "./device";

export interface Room {
    id:number;
    number:number;
    devices: Device;
}
