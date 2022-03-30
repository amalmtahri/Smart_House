import { Camera } from "./camera";
import { Lamp } from "./lamp";
import { Tv } from "./tv";

export interface Room {
    id:number;
    number:number;
    lamps: Lamp[];
    tvs: Tv[],
    cameras: Camera[];
}
