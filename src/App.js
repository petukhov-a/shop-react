import { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Items from "./component/Items";

const App = () => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        title: "Стул серый",
        img: "link_to_stool_image.jpg",
        desk: "Описание стула",
        category: "chairs",
        price: 100,
      },
      {
        id: 2,
        title: "Стол",
        img: "link_to_stool_image.jpg",
        desk: "Описание стула",
        category: "tables",
        price: 100,
      },
      {
        id: 3,
        title: "Диван",
        img: "link_to_stool_image.jpg",
        desk: "Описание стула",
        category: "sofa",
        price: 100,
      },
      {
        id: 4,
        title: "Лампа",
        img: "link_to_stool_image.jpg",
        desk: "Описание стула",
        category: "lamp",
        price: 100,
      },
      {
        id: 5,
        title: "Стул белый",
        img: "link_to_stool_image.jpg",
        desk: "Описание стула",
        category: "chairs",
        price: 100,
      }
    ]
  );

  return (
    <div className="wrapper">
      <Header/>
      <Items items={items}/>
      <Footer/>
    </div>
  );
}

export default App;
