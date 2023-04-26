import DataJson from "../../data/db.json"
import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Header from "../header/Header";
export default TourDetails;
function TourDetails(props) {
 const { id } = useParams()
    let detail = DataJson.filter(tour => tour.id === id);
    const [text, setText] = useState("see more")
    const [value, setValue] = useState(200);
    const [count, setCount] = useState(2)
    
   
     let seeMore = () =>{ 
        
        setCount(count + 1)
        if (count % 2 == 0) {
            setText("see less")
            setValue(2000);
        }
        else {
            setText("see more")
            setValue(200);
        
        }}
     
return(
            
<>      
      
                   {detail.map((tour) => (
                            <div key={id}>

                                <Card style={{ width: '30rem' }}>




                                    <Card.Img variant="top" src={tour.image} />
                                    <Card.Body>
                                        <Card.Title>{tour.name} </Card.Title>
                                        <Card.Text>
                                            <p>  {tour.info.substring(0, value)}  </p>
                                        </Card.Text>
                                        <Button variant="primary" onClick={seeMore}  >{text}</Button>
                                    </Card.Body>


                                </Card >



                             
                            </div>))}
                     </>  )}
                      
                      
                      




          
    

