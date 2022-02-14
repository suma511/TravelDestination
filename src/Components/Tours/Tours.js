import './Tours.css' ;
import Tour from './Tour/Tour';
// import TourDetails from '../TourDetails/TourDetails';
function Tours(props) {

    return (
        <>
            {props.data.map((obj,idx) => {
                return (
                    <div key ={idx}>  
                        <Tour myTour={obj} myid={idx}/> 
                    </div>
                      
                        
                    
                );

            })}
           
        </>


    );
}

export default Tours;
