import React, { useState,useEffect } from 'react';
import "./product.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const [ product,setProduct ] = useState(null);
    // useParams() 실행되면 파라미터 값을 가지고 있는 객체를 반환
    // product/1 
    const { id } = useParams();
    useEffect(function(){
        axios.get(`http://localhost:3000/product/${id}`)
        .then(result=>{
            console.log(result);
            const pro = result.data;
            setProduct(pro);
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    if(!product) return <div>로딩중입니다</div>

    return (
        <div className="inner">
            <div id="image-box">
                <img src={product.imageUrl} alt="" />
            </div>
            <div id="profile-box">
                <ul>
                    <li>
                        <div>
                            <img src="/images/icons/avatar.png" alt="" />
                            <span>{product.seller}</span>
                        </div>
                    </li>
                    <li>
                        {product.name}
                    </li>
                    <li>
                        가격 : {product.price}원
                    </li>
                    <li>
                        등록일 2022년 6월 2일
                    </li>
                    <li>
                        상세설명
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;