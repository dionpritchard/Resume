import React, { useState, Component } from 'react'
import { TransitionGroup, CSSTransition }  from 'react-transition-group'

import { makeStyles } from '@material-ui/core/styles'


import Product from './Product'

const productListStyling = makeStyles({
  root: {

  },
});


class TempAnimator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 0,
      positionX: props.x,
      positionY: props.y,
    }
  }
  render () {
    const x = this.state.positionX
    const y = this.state.positionY

    return <h3 style={{position: 'absolute',left:x, top: y}}>weeee</h3>
  }
}


class ProductList extends Component {
  constructor(props) {
    super(props)

    const { products } = props


    this.state = {
      products: products,
      items: ['hello', 'world', 'click', 'me'],
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    console.log(`Removed.... ${i}`)
    //let newItems = this.state.items.slice();
    //newItems.splice(i, 1);
    //this.setState({items: newItems});
  }


  handleAddToCart (event) {
    let listItemElement = event.target.parentNode.parentNode.parentNode
    let imageElement = listItemElement.firstChild.firstChild
    const randNum = Math.floor(Math.random()*100)
    console.log(randNum)
  }


  render() {
    const items = this.state.items.map((item, i) => (
      <CSSTransition key={i} classNames="MyAnimation" timeout={{ enter: 9500, exit: 9500 }}>
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      </CSSTransition>
    ));



    const products = this.state.products

    return (
      <>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup transitionName="MyAnimation" transitionEnterTimeout={9500} transitionLeaveTimeout={9500}>
          {items}
        </TransitionGroup>
        END OF LIST2a2

        <ul style={{display:'grid',gridTemplateColumns: 'auto auto auto',justifyContent: 'center',gridRowGap: 32,gridColumnGap: 32,}}>
          {products.map(product => (
            <Product id={product._id} name={product.name} image={product.image} price={product.price} event={this.handleAddToCart} />
          ))}

        </ul>
      </>
    )
  }



}

export default ProductList
