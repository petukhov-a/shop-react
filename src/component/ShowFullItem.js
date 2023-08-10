

const ShowFullItem = (props) => {
  return (
    <div className="full-item">
        <div>
            <img src={props.item.img} onClick={() => props.onShowItem(props.item)}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className="add-to-cart" onClick={() => props.onAdd(props.item)}>+</div>
        </div>
    </div>
  )
}

export default ShowFullItem