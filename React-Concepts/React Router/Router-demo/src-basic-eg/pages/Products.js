import {Link}  from 'react-router-dom';

const Products = () => {
    return ( 
    <section>
        <h1>Product header</h1>
        <ul>
            <li><Link to="/products/p1" >Book</Link></li>
            <li><Link to="/products/p1" >carpet</Link></li>
            <li><Link to="/products/p1" >online course</Link></li>
        </ul>
    
    </section>
    )

}

export default Products;