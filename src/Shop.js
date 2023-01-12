import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const Shop = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await (await fetch('https://fortnite-api.com/v2/cosmetics/br/new')).json();
    const dataItems = await data.data.items;

    setItems(dataItems);
    console.log(dataItems);
  }
  return (
    <div>
      <h1>Hello from shop</h1>
      {
        items.map(item => (
          <h2 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h2>
        ))
      }
    </div>
  );
};
  
  export default Shop;