import "./Tours.css";
function Tours(props) {
    console.log(props);
    return (
        <>


            {props.data.map((tour) => (
                <div key={tour.id}>
                    <h3>{tour.name}</h3>

                    <img src={tour.image} alt={tour.image} ></img>
                </div>
            ))}
            



        </>
    );
}

export default Tours;

