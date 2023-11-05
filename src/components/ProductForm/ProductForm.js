import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = (props) => {
  return (
    <form>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />

      {/* <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (
            <li>
              <button
                type='button'
                className={clsx(
                  size.name === props.currentSize && styles.active
                )}
                onClick={() => props.setCurrentSize(size.name)}
              >
                {size.name}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li>
              <button
                type='button'
                className={clsx(
                  props.prepareColorClassName(color),
                  props.currentColor === color && styles.active
                )}
                onClick={() => props.setCurrentColor(color)}
              />
            </li>
          ))}
        </ul>
      </div> */}
      <Button className={styles.button} onClick={props.addToCart}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductForm;
