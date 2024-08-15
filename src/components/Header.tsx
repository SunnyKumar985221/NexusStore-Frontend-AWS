import { NavLink } from 'react-router-dom';
import '../assets/css/header.scss';
import logo from '../assets/images/logo.png';
import searchicon from '../assets/images/search.png';
import headerOffer from '../assets/images/headerOffer.png';
import cart from '../assets/images/cart.png';
import { useState, ChangeEvent, useEffect } from 'react';
import { categoriesData, productData } from "../assets/dummydata/data";
import { ProductData } from '../interfaces/interface';

interface HeaderProps {
  activeHeading: number;
}

const Header: React.FC<HeaderProps> = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchData, setSearchData] = useState<ProductData[] | null>(null);
  const [active, setActive] = useState<boolean>(true);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [openWishlist, setOpenWishlist] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts: ProductData[] = productData.filter((item: ProductData) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(term ? filteredProducts : null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="topbar-container">
        {/* Logo */}
        <div className='logo'>
          <NavLink to="/">
            <img src={logo} alt="logo" className='logo' />
          </NavLink>
        </div>

        {/* Search box */}
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img src={searchicon} alt='search' />
          {searchData && searchData.length > 0 && (
            <div className="searchbox">
              {searchData.map((item) => (
                <NavLink key={item.id} to={`/product/${item.id}`}>
                  <div className="">
                    <img src={item.image_Url[0].url} alt={item.name} />
                    <h1>{item.name}</h1>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Best Seller Button */}
        <div className="seller-button">
          <i className="fas fa-store"></i>
          <span>Become Seller <i className="fas fa-chevron-right"></i></span>
        </div>

        {/* Special Offer */}
        <div className="offer-header">
          <span>
            <img src={headerOffer} alt="headerOffer" />
          </span>
          <div>
            <p><i className="fab fa-slideshare"></i> Special Offer</p>
            <p><i className="fas fa-stopwatch"></i> Time Limit</p>
            <p><i className="fas fa-luggage-cart"></i> Most Bought</p>
            <p><i className="fas fa-sun"></i> Deal of the Day</p>
          </div>
        </div>
      </div>

      {/* Promo Slider */}
      <div className='promoSlider-Container'>
        <span>Flat 400 off on 1999 | Use Code: NEXUS1999 | Free Shipping on all Orders</span>
      </div>

      {/* Menu Bar */}
      <div className='menubar-container'>
        {/* Categories */}
        <div className="category">
          <i className="fas fa-align-right"></i>
          <i className="fas fa-caret-down"></i>
          <button>All Categories</button>
          <span className='dropdownSubMenu'>
            {categoriesData.map((item: any) => (
              <div className='category-items' key={item.id}>
                <span>
                  <img src={item.image_Url} alt='img' />
                </span>
                <span>{item.title}</span>
              </div>
            ))}
          </span>
        </div>

        {/* Menu */}
        <div className="menu">
          <NavLink to='/' className={activeHeading === 1 ? 'active-link' : ''}>Home</NavLink>
          <NavLink to='/best-selling' className={activeHeading === 2 ? 'active-link' : ''}>Best Selling</NavLink>
          <NavLink to='/products' className={activeHeading === 3 ? 'active-link' : ''}>Products</NavLink>
          <NavLink to='/events' className={activeHeading === 4 ? 'active-link' : ''}>Events</NavLink>
          <NavLink to='/faq' className={activeHeading === 5 ? 'active-link' : ''}>FAQ</NavLink>
        </div>

        {/* Other Icons */}
        <div className="othericons">
          <i className="far fa-heart"><span>3</span></i>
          <i className="fas fa-shopping-cart">5</i>
          <i className="far fa-user-circle"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
