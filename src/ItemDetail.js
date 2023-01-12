import React, {useState, useEffect} from "react";

const ItemDetail = ({match}) => {

  const [item, setItem] = useState([]);

  useEffect(() => {
    // fetchItem();
    console.log(match)
  }, []);

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${"hi"}`);
    const item = await data.json()

    // console.log(item);
  }
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
};
  
  export default ItemDetail;