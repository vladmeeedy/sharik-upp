import cartEmptyImg from '../assets/images/empty-cart.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CartEmpty = () => {
  const { t } = useTranslation();

  return (
    <div className="cart cart--empty">
      <h2>
        {t('cart.empty.title')} <span>😕</span>
      </h2>
      <p>
        {t('cart.empty.message')}
        <br />
        {t('cart.empty.instruction')}
      </p>
      <img src={cartEmptyImg} alt={t('cart.empty.imgAlt')} />
      <NavLink to="/" className="go-back-btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span>{t('cart.empty.buttonText')}</span>
      </NavLink>
    </div>
  );
};
