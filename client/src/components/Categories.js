import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Categories = React.memo(() => {
  const { t } = useTranslation();

  const links = useMemo(() => [
    { to: "/", label: t('categoryHomeBalloons') },
    { to: "/gelievye-shary", label: t('categoryLatexBalloons') },
    { to: "/folgirovannye-figury", label: t('categoryFiguresBalloons') },
    { to: "/folgirovannye-zvezdy", label: t('categoryStarsBalloons') },
    { to: "/folgirovannye-cifry", label: t('categoryNumbersBalloons') },
    { to: "/korobka-syurpriz", label: t('categorySurpriseBox') },
    { to: "/svechi-na-tort", label: t('categoryCandlesCake') }
  ], [t]);

  return (
    <div className="categories">
      <ul>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <p>{link.label}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
});
