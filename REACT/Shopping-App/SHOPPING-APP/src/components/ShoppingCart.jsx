import React, { useEffect, useState } from 'react'
const ShoppingCart = () => {
    const [cartitems,setCartitems]=useState([]);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setCartitems(data);
        })
        .catch(err=>{
              setError(err.message);
        })
    },[])
  return (
    <div>
      {error &&  <h1>Error: {error}</h1>}
      {
      cartitems.map((it,i)=>
        (<Cart key={i} item={it}/>))
      }
    </div>
  )
}

export default ShoppingCart