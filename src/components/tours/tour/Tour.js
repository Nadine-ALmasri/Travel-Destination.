import  {Link}  from "react-router-dom";


export default Tour
function Tour(props) {
   
   

  
     const { name, image,id} = props.tour;
  return (
    <div className="tourDiv">
      <Link to={`/city/${id}`}>
      <h3 className="title" >{name}</h3>
      <img src={image} alt={name} />
      </Link>
    </div>
  );
}
