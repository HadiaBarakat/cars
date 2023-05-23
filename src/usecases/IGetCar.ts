import {CarModel} from "../models/CarModel";

export namespace GetCar {
    export type Params = {
        type: string;
    };

    export type Model = CarModel;
}

export interface IGetCar {
    getCar: (params: GetCar.Params) => GetCar.Model;
}

