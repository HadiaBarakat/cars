import React from 'react';
import Cars from "./components/Cars";
import {DummyGetCar} from "./usecases/DummyGetCar";

function App() {
  return (
      <div className="App">
        <Cars getCar={new DummyGetCar()} />
      </div>
  );
}

export default App;
