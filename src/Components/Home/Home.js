import Tours from "../Tours/Tours";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Data from '../../data/Data.json';
function Home() {
    return (

        <>
            <Header />

            <Tours data = {Data}/>

            <Footer/> 
        </>

    );
}

export default Home;