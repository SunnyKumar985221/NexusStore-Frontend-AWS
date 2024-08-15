import React from 'react';
import '../assets/css/FeaturedProduct.scss';
import kidswear from '../assets/images/kidswear.png';
import menswear from '../assets/images/menswear.png';
import womenswear from '../assets/images/womenswear.png';
import costume from '../assets/images/costume.png';

const FeaturedProduct: React.FC = () => {
  return (
    <div className="featureContainer">
      <div className="featuresubContainer">
        <div className="title">Best Fashion Collection</div>
        <div className='items'>
          <div className='item'>
            <img src={kidswear} alt='kidswear' />
            <span>Kid's Wear</span>
          </div>

          <div className='item'>
            <img src={menswear} alt='menswear' />
            <span>Men's Wear</span>
          </div>

          <div className='item'>
            <img src={womenswear} alt='womenswear' />
            <span>Women's Wear</span>
          </div>

          <div className='item'>
            <img src={costume} alt='costume' />
            <span>Costume Special</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
