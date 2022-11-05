import {Car} from "./car";
import {Client} from "./client";

export class Rent {
    id: number;
    dateStart: string;
    dateEnd: string;
    rentStatus: string;
    cost: string;
    paid: boolean;
    client: Client;
    car: Car;
}
