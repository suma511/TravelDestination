function Tours(props) {

    return (
        <>
            {props.data.map(obj => {
                return (
                    <div>
                        <img src={obj.image} alt={obj.name} />
                        <h3>Name : {obj.name}</h3>
                    </div>
                );

            })}
           
        </>


    );
}

export default Tours;
