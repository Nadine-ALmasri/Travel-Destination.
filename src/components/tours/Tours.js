

import "./Tours.css";  
import Tour from "./tour/Tour";



function Tours(props) {
  
    return (
      <>
   {props.data.map((tour) => {
                return(
                    <Tour tour={tour} key={tour.id} />
                )
            }
            )}
           
        </>
    )
}
  



export default Tours;

