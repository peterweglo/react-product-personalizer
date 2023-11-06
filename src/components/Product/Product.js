import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    const size = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + size.additionalPrice;
  }, [props.basePrice, currentSize, props.sizes]);

  const addToCart = (e) => {
    e.preventDefault();
    console.log(
      `Summary \n==============\nName: ${props.title}\nPrice: ${getPrice}\nSize: ${currentSize}\nColor: ${currentColor}`
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          title={props.title}
          sizes={props.sizes}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          addToCart={addToCart}
          colors={props.colors}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Product;
