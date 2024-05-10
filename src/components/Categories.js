import React from 'react'



const categories = [
  'Наборы',
  "Гелиевые шарики",
  'Фольгированные фигуры',
  'Фольгированные звезды, сердца',
  'Цифры',
  'Коробка-сюрприз',
  'Свечи на торт',
]
const categoriesUa = [
  'Набори',
  "Гелієві кульки",
  'Фольговані фігури',
  'Фольговані зірки, серця',
  'Цифри',
  'Коробка-сюрприз',
  'Свічки на торт',
]

export const Categories = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    )
  },
)
