import styles from './Header.module.scss';
import { useState } from 'react';

export const Header = ({ togleCartHandler, cartSum }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerleft}>
        <img width={40} height={40} src="./assets/logo.svg" alt="logo" />
        <div>
          <h3 className={styles.name}>react sneakers</h3>
          <p className={styles.slogan}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerright}>
        <li className={styles.listitem}>
          <img
            onClick={() => togleCartHandler(true)}
            className={styles.cartIcon}
            src="./assets/cartSvg.svg"
            alt="cart icon"
          />{' '}
          <span> {cartSum} ua </span>
        </li>
        <li>
          <img src="./assets/hurtSvg.svg" alt="like icon" />
        </li>
        <li>
          <img src="./assets/meSvg.svg" alt="user icon" />
        </li>
      </ul>
    </header>
  );
};
