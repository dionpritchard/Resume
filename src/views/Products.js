import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ProductList from '../Components/Products/ProductList'
import { products } from "../data/data.js"


class ProductView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products,
      size: "",
      sort: "",
    }
  }
  render () {
    return (<div>
      <h2>View All</h2>
      <ProductList products={this.state.products} />
    </div>)
  }
}

export default ProductView
