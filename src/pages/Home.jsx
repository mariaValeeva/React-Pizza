import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {

    const [items, setItems] = React.useState([]); //все пиццы с бэкенда
    const [isLoading, setIsLoading] = React.useState(true); //загрузка страницы скелетон-пиццаБлок
  
    React.useEffect(()=>{
      fetch('https://63547427e64783fa82851bf5.mockapi.io/items')
    .then((res)=> {
      return res.json();
    })
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    })
    },[]);



    return (
        <>
         <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(6)].map((_,index)=> (
                <Skeleton key={index}
                />
              ))
              : items.map((obj,i)=> (
                <PizzaBlock key={i}
                            {...obj}
                />
              ))
            }
          </div>
        </>
    )
}

export default Home;