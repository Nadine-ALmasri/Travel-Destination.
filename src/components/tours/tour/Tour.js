import { Link } from "react-router-dom";


export default Tour
function Tour(props) {




  const { name, image, id } = props.tour;
  return (
    <div >
      <Link to={`/city/${id}`}>
        <h3 >{name}</h3>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}
