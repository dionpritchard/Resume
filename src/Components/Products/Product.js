import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const productStyling = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 2px 5px #c4c4c4',
    padding: 16,
    textAlign: 'center'
  },
  label: {
    marginTop: 32,
    marginBottom: 16,
    fontFamily: 'Roboto Condensed',
    color: '#353535',
    fontSize: 22,
  },
  button: {
    color: '#353535'
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  price: {
    color: '#858585'
  }
});


function Product (props) {
  const { name, id, image, price } = props
  const classes = productStyling()

  return (
    <li className={classes.root} key={id}>
      <a href={"#" + id} className={classes.link}>
        <img src={image} width={240} alt={name} style={{alignSelf: 'center'}} />
        <span className={classes.label}>{name}</span>
      </a>
      <div style={{display:'flex',flexGrow:'1',justifyContent:'space-around',alignItems:'baseline'}}>
        <span className={classes.price}>${price.toFixed(2)}</span>
        <Button onClick={props.event} variant="outlined" className={classes.button} >Add to Cart</Button>
      </div>
    </li>
  )
}
export default Product
