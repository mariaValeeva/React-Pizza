import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {

    const [items, setItems] = React.useState([]); //все пиццы с бэкенда
    const [isLoading, setIsLoading] = React.useState(true); //загрузка страницы скелетон-пиццаБлок
    const [categoryId, setCategoryId] = React.useState(0); // state с Categories перенесли сюда, чтобы фильтровать данные с бэкенда
    const [sortType, setSortType] = React.useState({name:"популярности", sortProperty: "rating"});
  

    const category = categoryId>0? `category=${categoryId}` : ""
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', "")
  


    React.useEffect(()=>{
      setIsLoading(true);
      fetch(`https://63547427e64783fa82851bf5.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
    .then((res)=> {
      return res.json()
    })
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    })
    window.scrollTo(0,0);
    },[categoryId, sortType]);

    console.log(categoryId, sortType);

     
    return (
        <div className="container">
          <div className="content__top">
              <Categories value={categoryId} 
                          onChangeCategory={(i)=>setCategoryId(i)} />
              <Sort value={sortType} 
                          onChangeSort={(i)=>setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                isLoading ? [...new Array(8)].map((_,index)=> (
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
        </div>
    )
}

export default Home;