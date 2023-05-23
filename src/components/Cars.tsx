import React, {ChangeEvent, useState} from 'react';
import {CarModel} from "../models/CarModel";
import {IGetCar} from "../usecases/IGetCar";
import {CarType} from "../enums/CarType";
import Car from "./Car";
import classes from "./Cars.module.css";

type CarsProps = {
    getCar: IGetCar;
};


const Cars: React.FC<CarsProps> = ({getCar}: CarsProps) => {

    const [car, setCar] = useState<CarModel | null>(null);

    const handleCarTypeChange = async(event: ChangeEvent<HTMLSelectElement>) => {
        const carType = event.target.value;
        const car = await getCar.getCar({
            type: carType,
        });

        setCar(car);
    };


    return (
        <div>
            <h1>Choose Car type</h1>
            <select className={classes.CarTypeSelect}
                    onChange={handleCarTypeChange}>
                <option>
                    Select
                </option>
                {Object.keys(CarType).map((key) => (
                    <option key={key} value={CarType[key as keyof typeof CarType]}>
                        {key}
                    </option>
                ))}
            </select>
            <div>
                {(() => {
                    if (car) {
                       return <Car car={car}/>
                    } else {
                        return "";
                    }
                })()}
            </div>
        </div>
    );
}

export default Cars;
