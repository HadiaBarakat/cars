import {CarModel} from "./CarModel";

export class SportCarModel extends CarModel{

    turbocharger : string;

    constructor(turbocharger: string) {
        super(4);
        this.turbocharger = turbocharger;
    }
}