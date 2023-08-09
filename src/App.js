import { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Items from "./component/Items";

const App = () => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        title: "Стул серый",
        img: "./img/chair-grey.jpeg",
        desc: "Описание стула",
        category: "chairs",
        price: '100',
      },
      {
        id: 2,
        title: "Стол",
        img: "./img/table.webp",
        desc: "Описание стула",
        category: "tables",
        price: '100',
      },
      {
        id: 3,
        title: "Диван",
        img: "./img/sofa.jpeg",
        desc: "Описание стула",
        category: "sofa",
        price: '100',
      },
      {
        id: 4,
        title: "Лампа",
        img: "./img/wall-light.jpeg",
        desc: "Описание стула",
        category: "lamp",
        price: '100',
      },
      {
        id: 5,
        title: "Стул белый",
        img: "./img/chair-white.jpeg",
        desc: "Описание стула",
        category: "chairs",
        price: '100',
      }
    ]
  );
  const [orders, setOrders] = useState([]);

  const deleteOrder = (id) => {
    setOrders(orders => orders.filter(el => el.id !== id));
  }

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      setOrders(orders => [...orders, item]);
    }
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Items items={items} onAdd={addToOrder}/>
      <Footer/>
    </div>
  );
}

export default App;
