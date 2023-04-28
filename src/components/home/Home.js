import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";//countainer
import './Home.css';

export default Home;









function Home(props) {
  return (
    <>

      <Tours data={props.data} />










      <Footer />

    </>
  );
}