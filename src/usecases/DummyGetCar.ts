import {IGetCar, GetCar} from "./IGetCar";
import {CarModel} from "../models/CarModel";
import {CarType} from "../enums/CarType";
import {ElectricCarModel} from "../models/ElectricCarModel";
import {SportCarModel} from "../models/SportCarModel";
import {TwoWheelsCarModel} from "../models/TwoWheelsCarModel";

export class DummyGetCar implements IGetCar {
    getCar(params: GetCar.Params): GetCar.Model {
        switch(params.type){
            case CarType.Electric:
                return new ElectricCarModel("chargingPort1");
            case CarType.Sport:
                return new SportCarModel("turboCharger1");
            case CarType.TwoWheels:
                return new TwoWheelsCarModel();
            default:
                return new CarModel(4);
        }

    }

}