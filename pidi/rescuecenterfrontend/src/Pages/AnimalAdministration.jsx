import React from 'react';
import { useEffect, useState } from "react";
import AnimalCardGridCom from '../Components/AnimalCardCom/AnimalCardGridCom';
const fetchAnimals = (dataSetter) => {
    return fetch(`http://localhost:8080/animals`).then((res) => res.json().then((data) => dataSetter(data)));
};

const AnimalAdministration = () => {
    const [animals, setAnimals] = useState(null);
    console.log(animals);

    useEffect(() => {
        fetchAnimals(setAnimals)
      }, []);

  return (
    <div>
        <div>
            {animals && <AnimalCardGridCom animals={animals}/>}
        </div>
    </div>
  )
}

export default AnimalAdministration;