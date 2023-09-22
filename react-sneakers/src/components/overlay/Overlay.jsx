import styles from './Overlay.module.scss';

export const Overlay = ({ togleCartHandler }) => {
  return (
    <div className={styles.overlay} onClick={() => togleCartHandler(false)}>
      <p> НАЖМИТЕ НА ЭТУ ОБДАСЬ ДЛЯ ТОГО ЧТО-БЫ ЗАКРЫТЬ КОРЗИНУ</p>
    </div>
  );
};
