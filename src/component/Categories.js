import { useState } from "react";


const Categories = (props) => {

    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'chairs',
            name: 'Стулья'
        },
        {
            key: 'sofa',
            name: 'Диваны'
        },
        {
            key: 'tables',
            name: 'Столы'
        },
        {
            key: 'light',
            name: 'Свет'
        },
    ]);

    return (
        <div className="categories">
            {categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}

export default Categories;