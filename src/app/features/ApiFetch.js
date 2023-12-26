import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addMissions, addRockets } from "./slice/dataSlice";

function ApiFetch(){

const [rockets, setRockets] = useState([]);
const [missions, setMissions] = useState([])

const dispatch = useDispatch()

useEffect(() => {
   const fetchRockets = async () => {
     try {
       const response = await fetch('https://api.spacexdata.com/v4/rockets');
       const data = await response.json();
       setRockets(data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
   const fetchMissions = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      setMissions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   fetchRockets();
   fetchMissions();
   console.log(rockets);
}, []);

dispatch(addRockets(rockets))
dispatch(addMissions(missions))

}

export default ApiFetch