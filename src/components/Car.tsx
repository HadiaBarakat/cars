import React from "react";
import {CarModel} from "../models/CarModel";
import {SportCarModel} from "../models/SportCarModel";
import {ElectricCarModel} from "../models/ElectricCarModel";
import {TwoWheelsCarModel} from "../models/TwoWheelsCarModel";

type CarProps = {
    car: CarModel;
};

const Car: React.FC<CarProps> = ({car}: CarProps) => {
    return (
      <div>
          {(() => {
              if(car instanceof SportCarModel){
                  return (
                      <div>turbo charger is {car.turbocharger}</div>
                  )
              } else if(car instanceof ElectricCarModel){
                  return (
                      <div>
                          <div>charging Port is {car.chargingPort}</div>
                      </div>
                  )
              } else if(car instanceof TwoWheelsCarModel){
                  return (
                      <div>number of wheels is {car.numberOfWheels}</div>
                  )
              } else {
                  return "";
              }
          })()}
      </div>
    );
}

export default Car;