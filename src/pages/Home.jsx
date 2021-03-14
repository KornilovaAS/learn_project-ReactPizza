import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components'
import { setCategory, setSortBy } from '../redux/action/filters'
import { fetchPizzas } from '../redux/action/pizzas'
import { addPizzaToCart } from '../redux/action/cart'

const categoryNames = [
   'Мясные',
   'Вегетарианская',
   'Гриль',
   'Острые',
   'Закрытые']

const sortItems = [
   {
      name: 'популярности',
      type: 'popular',
      order: 'desk'
   },
   {
      name: 'цене',
      type: 'pice',
      order: 'desk'
   },
   {
      name: 'алфавиту',
      type: 'name',
      order: 'asc'
   }
]

function Home() {
   const dispatch = useDispatch()
   const items = useSelector(({ pizzas }) => pizzas.items)
   const cartItems = useSelector(({ cart }) => cart.items)
   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
   const { category, sortBy } = useSelector(({ filters }) => filters)

   React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category))
   }, [category, sortBy])

   const onSelectCategory = React.useCallback(index => dispatch(setCategory(index)), [])
   const onSelectSortType = React.useCallback(type => dispatch(setSortBy(type)), [])
   const handleAddPizzaToCart = (obj) => {
      dispatch({
         type: 'ADD_PIZZA_CART',
         payload: obj
      })
   }

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               className="pizza-block"
               activeCategory={category}
               onClickCategory={onSelectCategory}
               items={categoryNames}
            />
            <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               isLoaded ? items.map((obj) => (
                  <PizzaBlock
                     onClickAddPizza={handleAddPizzaToCart}
                     key={obj.id}
                     addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                     {...obj}
                  />
               ))
                  : Array(10)
                     .fill(0).
                     map((_, index) => <LoadingBlock key={index} />)
            }

         </div>
      </div>
   )
}

export default Home
