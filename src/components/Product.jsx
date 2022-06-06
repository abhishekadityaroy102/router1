import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Product.module.css"
const Product = () => {
  const [product,setproduct]=useState({})
  const {id}=useParams();
  useEffect(()=>{
    if(id){
      fetch(`http://localhost:8080/Products/${id}`).then((r)=>r.json())
      .then((d)=>setproduct(d))
    
    }
  
  },[id])
  return (
    <div className={styles.product}>
     
      <div>Product name:{product.name}</div>
      <div>Product price:{product.price}</div>
    </div>
  )
}

export default Product