import React,{ useState,useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import MainProduct from './MainProduct';

const MainPage = () => {
    const [ products,setProducts ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(result=>{
            const products = result.data;
            console.log(result.data);
            setProducts(products);
        
        }).catch((e)=>{
            console.log(e);
        })
    },[])
    if(products===[]) return <div>로딩중입니다</div>

    return (
        <div>
            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="" />
                </div>
                <div id="product-list" className="inner">
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {products.map(product=>
                            <MainProduct key={product.id} product={product}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;