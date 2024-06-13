import React, { useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

export const Categories = React.memo(() => {
  const links = useMemo(() => [
    { to: "/", label: "Наборы" },
    { to: "/gelievye-shary", label: "Гелиевые шарики" },
    { to: "/folgirovannye-figury", label: "Фольгированные фигуры" },
    { to: "/folgirovannye-zvezdy", label: "Фольгированные звезды, сердца" },
    { to: "/folgirovannye-cifry", label: "Цифры" },
    { to: "/korobka-syurpriz", label: "Коробка-сюрприз" },
    { to: "/svechi-na-tort", label: "Свечи на торт" }
  ], []);

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
