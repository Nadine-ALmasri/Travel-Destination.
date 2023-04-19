import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import './Home.css';
export default Home;

function Home(props) {
    return (
      <>
  <Header/>
  <Tours data={props.data}/>
  <Footer/>

      </>
    );
  }