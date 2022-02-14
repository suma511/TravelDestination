import './TourDetails.css' ;
// import Data from './data/Data.json';
import { useState } from 'react/cjs/react.production.min';
import Tour from '../Tours/Tour/Tour';
function TourDetails() {
    const[isTourDetails, setTourDetails]=useState(false) ;
    const handelTourClick =() =>{
        setTourDetails(!isTourDetails)
    }
    return (

    <>
    
    
    <TourDetails handelTourClick={handelTourClick} />

if (isTourDetails) {
    <Tour/>
}
    </>
           

    );
}

export default TourDetails;