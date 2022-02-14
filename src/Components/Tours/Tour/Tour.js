import './Tour.css' ;
import { Link } from 'react-router-dom';
import TourDetails from '../../TourDetails/TourDetails';

function Tour(props) {

    return (
        <>
                    <div> 
                        <img src={props.myTour.image} alt={props.myTour.name} />
                        <h3>Name : {props.myTour.name}</h3>
                        <Link to={'/city/'+props.myid} onClick={props.handelTourClick}>TourDetails</Link>
                    </div> 
            
        </>
    );
}

export default Tour;
