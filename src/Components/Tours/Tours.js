import './Tours.css';
import Tour from './Tour/Tour';
import { Link } from 'react-router-dom';
function Tours(props) {

    return (
        <>
            {props.data.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/city/${obj.id}`}>
                            <Tour tour={obj} />
                        </Link>
                    </div>



                );

            })}

        </>


    );
}

export default Tours;
