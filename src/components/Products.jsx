import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from "./Products.module.css"

const Products = () => {
  const [products,setproducts]=useState([])
    useEffect(()=>{
       const fetchproducts=async()=>{
         let r=await fetch("http://localhost:8080/Products");
         let data=await r.json();
         setproducts(data)
        // console.log(data)
    }
    fetchproducts()
    },[])
    console.log(products)
  return (
    <div>{products.map((el)=>(
      
      <div className={styles.products} key={el.id}><Link to={`/products/${el.id}`}>{el.name}</Link></div>
    ))}
    {/* <div><Product/></div> */}
    <Outlet></Outlet></div>
  )
}

export default Products