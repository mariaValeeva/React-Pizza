import React from "react";



import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import { SearchContext } from '../App';

const Home = () => {

    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([]); //все пиццы с бэкенда
    const [isLoading, setIsLoading] = React.useState(true); //загрузка страницы скелетон-пиццаБлок
    const [categoryId, setCategoryId] = React.useState(0); // state с Categories перенесли сюда, чтобы фильтровать данные с бэкенда
    const [sortType, setSortType] = React.useState({name:"популярности", sortProperty: "rating"});
    const [currentPage, setCurrentPage] = React.useState(1);//изменение текущей страницы(пагинация)
  

    const category = categoryId>0? `&category=${categoryId}` : ""
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', "")
    const skeletons = [...new Array(8)].map((_,index)=> (<Skeleton key={index}/>))
    const pizzas = items.map((obj)=> (<PizzaBlock key={obj.id} {...obj}/>))

    const search = searchValue ? `search=${searchValue}` : ''
    
  


    React.useEffect(()=>{
      setIsLoading(true);
      fetch(`https://63547427e64783fa82851bf5.mockapi.io/items?page=${currentPage}&limit=4&${search}${category}&sortBy=${sortBy}&order=${order}`)
    .then((res)=> {
      return res.json()
    })
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
      console.log(arr)
    })
    window.scrollTo(0, 0);
    },[categoryId, sortType, searchValue, currentPage]);

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
              {isLoading ? skeletons : pizzas}
            </div>

            <Pagination onChangePage={(number)=> setCurrentPage(number)} />
        </div>

      

    )
}

export default Home;