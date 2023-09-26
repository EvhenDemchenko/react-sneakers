import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCartState } from '../../store/slice';
import Selector from '../../store/selectors';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const dispatch = useDispatch();
  const cartItemsSum = useSelector(Selector.cartItemsSum);

  return (
    <header className={styles.header}>
      <div className={styles.headerleft}>
        <NavLink to={'/'}>
          <img width={40} height={40} src="./assets/logo.svg" alt="logo" />
        </NavLink>
        <div>
          <h3 className={styles.name}>react sneakers</h3>
          <p className={styles.slogan}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerright}>
        <li className={styles.listitem}>
          <img
            onClick={() => dispatch(setCartState('open'))}
            className={styles.cartIcon}
            src="./assets/cartSvg.svg"
            alt="cart icon"
          />
          <span> {cartItemsSum} ua </span>
        </li>
        <li>
          <NavLink to={'/favourite'}>
            <img src="./assets/hurtSvg.svg" alt="like icon" />
          </NavLink>
        </li>
        <li>
          <img src="./assets/meSvg.svg" alt="user icon" />
        </li>
      </ul>
    </header>
  );
};
