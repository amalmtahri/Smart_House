import { House } from "./house";

export interface User {
    id?:number;
    username:string;
    password:string;
    house?: House[];
}
