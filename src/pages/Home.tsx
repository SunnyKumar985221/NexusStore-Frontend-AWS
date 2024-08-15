import Categories from "../components/Categories";
import Cover from "../components/Cover";
import FeaturedProduct from "../components/Featuredproduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sponsers from "../components/Sponsers";


const Home = () => {
  return (
    <>
      <Header activeHeading={1} />
      <Cover />
      <Categories />
      <FeaturedProduct/>
      <Sponsers />
      <Footer /> 
    </>
  )
}

export default Home;