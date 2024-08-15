import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../assets/dummydata/data";
import '../assets/css/Categories.scss';

interface Category {
  id: string;
  title: string;
  image_Url: string;
}

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (category: Category) => {
    navigate(`/products?category=${category.title}`);
  };

  return (
    <div className='container'>
      {categoriesData && categoriesData.map((category: Category) => (
        <div
          className="category-item"
          key={category.id}
          onClick={() => handleSubmit(category)}
        >
          <h5 className='title'>{category.title}</h5>
          <img src={category.image_Url} alt="icon" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
