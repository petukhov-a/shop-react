import React from 'react'
import Item from './Item'

const Items = (props) => {
  return (
    <main>
        {props.items.map(el => (
            <Item key={el.id} item={el} onAdd={props.onAdd} onShowItem={props.onShowItem}/>
        ))}
    </main>
  )
}

export default Items