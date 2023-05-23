import {CarModel} from "./CarModel";

export class ElectricCarModel extends CarModel{

    chargingPort : string;

    constructor(chargingPort: string) {
        super(4);
        this.chargingPort = chargingPort;
    }
}