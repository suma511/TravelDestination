import './TourDetails.css' ;

import React, { useState } from 'react';
import Data from '../../data/Data.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function TourDetails() {
    const [readMore,setReadMore] = useState(false) ; 
    let { id } = useParams() ;
    const result = Data.filter((value)=>
    value.id=== id );
    return(

<>
<h2>{result[0].name}</h2>
<p>
    {readMore
    ?`Describtion : ${result[0].info}`
    :`Describtion : ${result[0].info.substring(0,200)}...`}
    <button onClick={()=>setReadMore(!readMore)}>
        {readMore ? "show less" : "show more"}
        
    </button>
</p>
<p>{result[0].price}</p>
<img src={result[0].image}/>
</>           
);
}

export default TourDetails;