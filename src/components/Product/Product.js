import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    const size = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + size.additionalPrice;
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log(
      `Summary \n==============\nName: ${
        props.title
      }\nPrice: ${getPrice()}\nSize: ${currentSize}\nColor: ${currentColor}`
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
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          title={props.title}
          sizes={props.sizes}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          prepareColorClassName={prepareColorClassName}
          setCurrentSize={setCurrentSize}
          addToCart={addToCart}
          colors={props.colors}
        />
        {/* <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li>
                  <button
                    type='button'
                    className={clsx(size.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li>
                  <button
                    type='button'
                    className={clsx(
                      prepareColorClassName(color),
                      currentColor === color && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button} onClick={addToCart}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form> */}
      </div>
    </article>
  );
};

Product.propTypes = propTypes;

export default Product;
