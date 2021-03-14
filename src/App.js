import React from 'react';
import { useDispatch } from 'react-redux'

import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  )
}

export default App



// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas)
//     })
//   }

// render() {
//   return (
//     <div>
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" render={() => <Home items={this.props.items} />} exact />
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     </div>
//   )
// }
// }

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     }
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     }
//   }
// )(App)
