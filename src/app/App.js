import React, { useState } from "react";

import CityData from './assets/city.list.json';
import ItemDetails from './ItemDetails';
// import './styles/style.scss';

const App = () => {
    const [cityDataSelected, setCityDataSelected] = useState(CityData ? CityData.slice(0,3) : []);
    const [citySelected, setCitySelected] = useState({});

    const addCity = () => {
        if ((citySelected.name && (!cityDataSelected.includes(citySelected)))) {
            setCityDataSelected([...cityDataSelected, citySelected]);
        }
    };

    const onSelectCity = (value) => {
        if (value) {
            const selectedCity = CityData.find(city => `${city.name},${city.country}` === value);
            
            if (selectedCity) {
                setCitySelected(selectedCity);
            }
        }
    };
    
    return (
        <div className="page">
            <header>Open Weather Demo</header>
            <main>
                <div className="ow-full-container city-container">
                    <label for="id-city-selector">City</label>
                    <input type="text" list="id-city-data" id="id-city-selector" className="city-selector" onChange={(e) => onSelectCity(e.target.value)}/>
                    <datalist id="id-city-data">
                        {CityData.map((city) => {
                            return (
                                <option>{`${city.name},${city.country}`}</option>
                            );
                        })}
                    </datalist>
                    <button onClick={addCity}>Add</button>
                </div>
                <ItemDetails cityList={cityDataSelected} />
            </main>
        </div>
    )
};

export default App;
