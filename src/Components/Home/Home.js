import './Home.css';
import Tours from "../Tours/Tours";
import Data from '../../data/Data.json';




function Home() {
    return (

        <>
            

            <Tours data={Data} />
        </>

    );
}

export default Home;