import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
const Navbar = () => {
    let navigate=useNavigate()
    const handlenavigate=()=>{
          navigate("/products")
    }
  return (
    <div className={styles.navbar}>Navbar
        <Link to="/">Home</Link>
        <button onClick={handlenavigate}>All products</button>
        {/* <Link to="/products">All products</Link> */}
        
    </div>
  )
}

export default Navbar