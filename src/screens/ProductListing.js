import { useEffect, useState } from "react";
import useFetch from "../hooks/fetch";
import ListItem from "../components/Listings/ListItem";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  const [dishes, setDishes] = useState([]);
  const { isLoading, error, requestFetch: getFetch } = useFetch();
  let content = "Oops! Nothing To Show!";

  useEffect(() => {
    const getUrl = fetch("https://react-http-2630b-default-rtdb.firebaseio.com/dishes.json");
    const getData = (appliedData) => {
      const fetchData = [];

      for (const index in appliedData) {
        fetchData.push({
          id: index,
          name: appliedData[index].name,
          description: appliedData[index].description,
          price: appliedData[index].price,
          oldprice: appliedData[index].oldprice,
          image: appliedData[index].image,
        });
      }
      setDishes(fetchData);
    };

    getFetch(getUrl, getData);
  }, [getFetch]);

  const dishList = dishes.map((item, key) => (
    <ListItem
      key={key}
      id={item.id}
      name={item.name}
      description={item.description}
      src={item.image}
      price={item.price}
      oldprice={item.oldprice}
    />
  ));

  if(dishList.length !==0) {
    content = dishList;
  }

  if(error){
    content = "Something Went Wrong!";
  }

  if(isLoading){
    content = "Loading...";
  }

  return (
    <section className={styles.section}>
      <ul>{content}</ul>
    </section>
  );
};

export default ProductListing;
