import React from 'react'
import { NavLink } from 'react-router-dom'

export const Categories = React.memo(() => {
  return (
    <div className="categories">
      <ul>
      
          <NavLink 
            exact 
            to="/" 
            activeClassName="active">
            Наборы
          </NavLink>
        
      
          <NavLink 
            to="/gelievye-shary" 
            activeClassName="active">
            Гелиевые шарики
          </NavLink>
        
      
          <NavLink 
            to="/folgirovannye-figury" 
            activeClassName="active">
            Фольгированные фигуры
          </NavLink>
        
      
          <NavLink 
            to="/folgirovannye-zvezdy" 
            activeClassName="active">
            Фольгированные звезды, сердца
          </NavLink>
        
      
          <NavLink 
            to="/folgirovannye-cifry" 
            activeClassName="active">
            Цифры
          </NavLink>
        
      
          <NavLink 
            to="/korobka-syurpriz" 
            activeClassName="active">
            Коробка-сюрприз
          </NavLink>
        
      
          <NavLink 
            to="/svechi-na-tort" 
            activeClassName="active">
            Свечи на торт
          </NavLink>
      </ul>
    </div>
  )
})
