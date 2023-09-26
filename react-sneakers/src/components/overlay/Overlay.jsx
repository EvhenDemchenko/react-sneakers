import styles from './Overlay.module.scss';
import { setCartState } from '../../store/slice';
import { useDispatch } from 'react-redux';

export const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.overlay} onClick={() => dispatch(setCartState('close'))}>
      <p> НАЖМИТЕ НА ЭТУ ОБДАСЬ ДЛЯ ТОГО ЧТО-БЫ ЗАКРЫТЬ КОРЗИНУ</p>
    </div>
  );
};
