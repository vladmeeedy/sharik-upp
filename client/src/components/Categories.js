import React from 'react'
import { NavLink } from 'react-router-dom'

export const Categories = React.memo(() => {
  return (
    <div className="categories">
      <ul>
      
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Наборы
          </NavLink>
        
      
          <NavLink 
            to="/gelievye-shary" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Гелиевые шарики
          </NavLink>
        
      
          <NavLink 
            to="/folgirovannye-figury" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Фольгированные фигуры
          </NavLink>
        
      
          <NavLink 
            to="/folgirovannye-zvezdy" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Фольгированные звезды, сердца
          </NavLink>
        
      
          <NavLink 
            to="/folgirovannye-cifry" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Цифры
          </NavLink>
        
      
          <NavLink 
            to="/korobka-syurpriz" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Коробка-сюрприз
          </NavLink>
        
      
          <NavLink 
            to="/svechi-na-tort" 
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Свечи на торт
          </NavLink>
      </ul>
    </div>
  )
})
