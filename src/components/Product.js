import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../reducer/cartSlice'
import { fetchproduct } from '../reducer/productSlice'

const Product = () => {
    const dispatch = useDispatch();
    const {data:product} = useSelector((state) => state.product)
    // const [product ,setproduct] = useState([]);

    useEffect(() => {
        dispatch(fetchproduct());

        // const fetchproduct = async() => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json(); 
        //     setproduct(data);
        // }

        // fetchproduct();
    },[])

    const handleAdd = (product) => {
        dispatch(add(product)); 
    }

  return (
    <div className='productsWrapper'>
        {product.map((product) =>(
            <div className='card' key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button className='btn' onClick={() => handleAdd(product)}> Add to Cart</button>
            </div>

        ))}
         
    </div> 
  )
}

export default Product
