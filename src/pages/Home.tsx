import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the import based on your folder structure
import Categories from '../components/Categories';
import Cover from '../components/Cover';
import FeaturedProduct from '../components/Featuredproduct';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sponsers from '../components/Sponsers';

import { fetchAuthSession } from 'aws-amplify/auth';

const Home = () => {
  const { isToken } = useSelector((state: RootState) => state.authentication);
  const fetchData = async () => {
    try {
      // Ensure token is available and attach it to the request
      const session = await fetchAuthSession();
      console.log('session', session.tokens?.idToken);

      const tokenid = isToken ? `Bearer ${session.tokens?.idToken}` : '';

      const result = await axios.get('https://9ecl8cbtc9.execute-api.ap-south-1.amazonaws.com/dev/products', {
        headers: {
          'Authorization': tokenid,
        },
      });
      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Header activeHeading={1} />
      <Cover />
      <Categories />
      <FeaturedProduct />
      <Sponsers />
      <Footer />
    </>
  );
};

export default Home;
